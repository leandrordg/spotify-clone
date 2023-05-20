import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`"bg-zinc-300 text-zinc-50 ${inter}"`}>{children}</body>
    </html>
  );
}