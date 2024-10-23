// components/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme="light"
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  );
}
