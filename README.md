# Entail Dashboard

Prototype for a dashboard with mocked datasets

## Architecture notes

**Data layer**: Fetches and manipulates data, joins data from different sources.

* See the [back-end API](apps/web/app/api) and the [front-end API](apps/web/app/apiClient).
* Includes a simple setup for showing error messages.

**Compositional layer**: Connects UI with data.

* Currently implemented directly in [the dashboard page](apps/web/app/dashboard/[scheduleId]/[projectId]/[[...taskId]]/page.tsx).
* A dedicated layer of stateful components should be introduced.

**UI layer**: Presentational components.

* Provided by [@repo/ui](packages/ui/), using [MUI](https://mui.com/material-ui).
* All CSS comes from this package. Depending on future requirements, external UI libraries may or may not be used.

## Getting started

```bash
# Install dependencies and run
yarn install
yarn dev

# E2E tests
cd apps/e2e
npx playwright install
yarn e2e

# Code quality
yarn knip
yarn lint
yarn check-types

```

## Assumptions

* Fetching data is fast (no long-running tasks).
* Offline access is out of scope.
* I have named the dataset containing the tasks a `schedule`.
* The implementation does not take latitude and longitude into account.
* Dates in the `schedule` and `weather` datasets do not overlap. I have made small adjustments to the mock data to demonstrate the go-indicator.

## Future improvements and features

### State management

* **URL state**: Expand the URL with more fragments and parameters for persistent view states across reloads.
* **State from React Query**: Provides loading/error states when syncing data. Can be used as an alternative to other state management solutions when performing optimistic updates. Storing data in IndexedDB helps prevent memory and performance issues caused by in-memory state.
* **In-memory state**: For features like modals, toasts, joyrides, sidebars and animations. `localStorage` and `sessionStorage` can be used for persistence.
Implement Redux or a similar pattern/library and organize into well-defined slices.

### Reusability

The monorepo setup is a good foundation for reusability (and scalability). Further steps:

* Utility package for generic functions
* Utility package for business logic. Move [apps/web/app/lib/utils](/apps/web/app/lib/utils) to this package.
* Packages for larger features (e.g., a weather widget, authentication, notifications).
* Introduce more apps if Entail expands into multiple products. A future app can then be built on top of the existing packages.

### Testability

* **Integration**: Playwright for end-to-end testing, with a shared [@repo/e2e-utils](packages/e2e-utils/) package for stable HTML selectors.
* **Edge cases**: Create a small system for mocking API responses and errors. Avoid too much hardcoded mock data to prevent unnecessary maintenance.
* **Unit tests**: For utilities and logic. A lighter test runner will be better than Playwright for running these as a background task during development.

### Performance

* **Large datasets**: Use pagination and a robust URL structure. GraphQL or targeted endpoints can reduce payload size.
* **Caching**: Persist cache in IndexedDB to minimize requests cross sessions and reduce memory usage.
* **External 3D visualizations**: Fully unload when not needed and avoid CSS wrappers that hurt performance (transforms, filters, opacity, overflow).

### Accessibility and usability

Accessibility is essential for operators under stress, where cognition and attention are reduced. Things to keep in mind:

* Follow WCAG standards.
* Confirm critical actions and allow cancellation.
* Show progress for long-running tasks.
* Working conditions may be suboptimal. High contrast, legible typography, scalable text.
* Consider implementing "simple mode" / "advanced mode" for certain features.

### Feature flags

Can simplify and speed up development:

* The main branch can be updated frequently with unfinished features.
* Continuous deployment while testing and iterating on new features in production.

Options include:

* **External services** with caching for resilience. For example [Unleash](https://www.getunleash.io) or [Flags SDK](https://flags-sdk.dev).
* **An internal service** with an admin interface.
* **In-code flags** without the disadvantages of relying on outside services. Requires redeploys.
* **User opt-in/out** for beta features (as an alternative to flags).

*Notes*: Use feature flags sparingly to avoid complexity; pair with tracking to measure impact.
Avoid nesting logic for different flags.

### Real-time updates

* Consider using React Query `streamedQuery` for live updates.
* Store streamed data in IndexedDB to avoid having to refetch all chunks of data in case of a page reload.
* Follow React best practices so that only components depending on new data re-render.
* Build a robust system for handling errors and edge cases. Log errors server-side and display messages to the user.