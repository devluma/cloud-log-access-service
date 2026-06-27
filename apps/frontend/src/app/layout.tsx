import type { ReactNode } from 'react';

export const metadata = {
  title: 'Cloud Log Access Service',
  description: 'Secure cloud log access dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
