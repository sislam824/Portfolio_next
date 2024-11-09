// src/types/next-themes.d.ts
import * as React from "react";

declare module "next-themes" {
  export interface ThemeProviderProps {
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
    children?: React.ReactNode;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
}
