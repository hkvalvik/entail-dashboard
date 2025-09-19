import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { theme } from "../theme";

export const SiteHeader = () => (
  <Stack
    direction="row"
    spacing={2}
    sx={{
      padding: 1,
      backgroundColor: theme.palette.grey[50],
      borderBottom: `1px solid ${theme.palette.grey[800]}`,
    }}
  >
    <Button variant="contained" color="success" href="/dashboard/1/1">
      Working project
    </Button>
    <Button
      variant="contained"
      color="error"
      href="/dashboard/INVALID_ID/INVALID_ID"
    >
      Failing project
    </Button>
  </Stack>
);
