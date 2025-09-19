import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeRegistry } from "@repo/ui/ThemeRegistry";
import type { Metadata } from "next";
import "normalize.css";
import { ReactNode } from "react";
import { ApiProvider } from "./apiClient/ApiProvider";

export const metadata: Metadata = {
  title: "Entail",
  description: "Marine Operations Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApiProvider>
          <AppRouterCacheProvider>
            <ThemeRegistry>{children}</ThemeRegistry>
          </AppRouterCacheProvider>
        </ApiProvider>
      </body>
    </html>
  );
}
