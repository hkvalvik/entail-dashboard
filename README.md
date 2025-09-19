# Entail Dashboard

Prototype for a dashboard with mock data.

## Architecture notes

**Data layer**: Fetches and manipulates data. Error handling is currently done through a React Context but should be replaced with a more robust system.  
See the [back-end API](apps/web/app/api) and [front-end API](apps/web/app/apiClient). In production, authentication and integration with internal services would be handled by the back end.

**Compositional layer**: Connects data to the UI. Currently implemented directly in [the dashboard page](apps/web/app/dashboard/[scheduleId]/[projectId]/[[...taskId]]/page.tsx). As the app grows, a dedicated layer of stateful components should be introduced.

**UI layer**: Provided by [@repo/ui](packages/ui/), using [MUI](https://mui.com/material-ui). Depending on future requirements, external UI libraries may or may not be used. UI components should remain reusable and encapsulated.

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

* Fetching data is fast (no long-running tasks)
* Next.js with a thin back end is used; a secure BFF would be needed in production
* Offline access is out of scope

## Future improvements

#### State management

* **URL state**: Continue persisting view state across reloads.
* **Front-end cache**: Already handled by React Query. Useful for syncing, loading/error states, optimistic updates, polling.
Data can be stored in IndexedDB to prevent memory and performance issues.
* **In-memory state**: For elements like modals, toasts, joyrides, sidebars and animations. `localStorage` and `sessionStorage` can be used for persistence.
Implement Redux or a similar pattern/library and organize into well-defined slices.

## Reusability

The monorepo setup already supports isolation and reuse. Further steps:

* Utility package for generic functions
* Utility package for business logic. Move [apps/web/app/lib/utils](/apps/web/app/lib/utils) to this package
* Larger packages for features (e.g., weather widget, authentication, notifications)
* Introduce more apps if Entail expands into multiple products

## Testability

* Integration: Playwright for end-to-end testing, with a shared [@repo/e2e-utils](packages/e2e-utils/) package for stable HTML selectors
* Edge cases: Mock API responses and error states. Create a small system for this that does not require too much maintenance
* Unit tests: For utilities and logic. A lighter test runner may be better than Playwright for running these

## Performance

* Large datasets: Use pagination and a robust URL structure. GraphQL or targeted endpoints can reduce payload size
* Caching: Persist cache in IndexedDB to minimize requests cross sessions
* External 3D visualizations: Fully unload when not needed and avoid CSS wrappers that hurt performance (transforms, filters, opacity, overflow)


## Accessibility and usability

* Confirm critical actions and allow cancellation
* Show progress for long-running tasks
* Accessibility is essential for operators under stress, where cognition and attention are reduced

## Feature flags

Options include:

* External services (e.g., [Unleash](https://www.getunleash.io), [Flags SDK](https://flags-sdk.dev)
) with caching for resilience
* In-code flags (requires redeploy)
* User opt-in/out (e.g. for beta features)

Use feature flags sparingly to avoid complexity; pair with tracking to measure impact.
Avoid nesting logic for different flags.

## Real-time updates

Use React Query `streamedQuery` for live updates. Follow React best practices so only components depending on new data re-render.
Store streamed data in IndexedDB to avoid having to refetch all chunks of data in case of a page reload.