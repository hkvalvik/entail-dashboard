import styled from "@emotion/styled";
import { theme } from "../theme";

type Variant = "error" | "info";

const variants = {
  error: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
  },
  info: {
    color: theme.palette.info.contrastText,
    backgroundColor: theme.palette.info.light,
  },
};

export interface StyledMessageBannerProps {
  variant: Variant;
}

export const StyledMessageBanner = styled.div<StyledMessageBannerProps>`
  ${({ variant }) => {
    const variantStyles = variants[variant];
    return `
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(1)};
      padding: ${theme.spacing(2)};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.fontWeightMedium};
      color: ${variantStyles.color};
      background-color: ${variantStyles.backgroundColor};
    `;
  }}
`;
