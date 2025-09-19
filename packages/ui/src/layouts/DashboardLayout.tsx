import { Stack, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactNode } from "react";
import { HorizontalSplit } from "../horizontalSplit/HorizontalSplit";
import { Content, StyledDashboadLayout } from "./styles";

interface Props {
  timeline: ReactNode;
  visualization: ReactNode;
  weather: ReactNode;
}

export const DashboardLayout = (props: Props) => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return isNarrowScreen ? (
    <NarrowLayout {...props} />
  ) : (
    <WideLayout {...props} />
  );
};

const NarrowLayout = ({ timeline, visualization }: Props) => (
  <StyledDashboadLayout>
    <HorizontalSplit top={timeline} bottom={visualization} />
  </StyledDashboadLayout>
);

const WideLayout = ({ timeline, visualization, weather }: Props) => (
  <StyledDashboadLayout>
    <Content>
      <Grid container spacing={2}>
        <Grid size={6}>{timeline}</Grid>
        <Grid size={6}>
          <Stack direction="column" spacing={2}>
            {visualization}
            {weather}
          </Stack>
        </Grid>
      </Grid>
    </Content>
  </StyledDashboadLayout>
);
