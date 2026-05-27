import './globals.css';

export const metadata = {
  title: 'Welcome, May — Claude Code',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
