import {
  Button,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { format, formatDistanceToNow } from "date-fns";
import { ElementType, ReactNode } from "react";
import { theme } from "../theme";
import {
  Description,
  FullDate,
  Line,
  ShortDate,
  StyledTimelineItem,
} from "./styles";

interface Props {
  isActive: boolean;
  title: ReactNode;
  status: "go" | "no-go";
  details: [label: string, value: string][];
  startDate: Date;
  endDate: Date;
  href: string;
  buttonComponent?: ElementType;
}

export const TimelineItem = ({
  isActive,
  title,
  status,
  details,
  startDate,
  endDate,
  href,
  buttonComponent = "a",
}: Props) => (
  <StyledTimelineItem>
    <ShortDate>{formatDistanceToNow(startDate, { addSuffix: true })}</ShortDate>
    <Line />
    <Description>
      <FullDate>
        {format(startDate, "ccc cc. MMM yy")} to{" "}
        {format(endDate, "ccc cc. MMM yy")}
      </FullDate>
      <Card
        elevation={isActive ? 2 : 0}
        sx={{
          backgroundColor: isActive ? undefined : "transparent",
        }}
      >
        <CardContent style={{ padding: theme.spacing(1) }}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              component={buttonComponent}
              href={href}
              aria-current={isActive ? "page" : undefined}
              variant={isActive ? "outlined" : "outlined"}
              sx={{
                borderColor: isActive ? "transparent" : undefined,

                backgroundColor: isActive ? undefined : "white",
              }}
            >
              {title}
            </Button>
            {status === "go" ? (
              <Chip label="Go" color="success" />
            ) : (
              <Chip label="No-go" color="error" />
            )}
          </Stack>
          {isActive && (
            <TableContainer component={Paper}>
              <Table aria-label="Details">
                <TableBody>
                  {details.map(([label, value], index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {label}
                      </TableCell>
                      <TableCell align="right">{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Description>
  </StyledTimelineItem>
);
