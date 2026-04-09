import { NovaThemeProvider } from '@nova-ui/hooks/use-theme';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Nova UI — Next.js Example',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('nova-ui-theme')||'system';var r=t==='system'?(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'):t;document.documentElement.setAttribute('data-theme',r);document.documentElement.classList.add(r)})()`,
          }}
        />
      </head>
      <body>
        <NovaThemeProvider>{children}</NovaThemeProvider>
      </body>
    </html>
  );
}
