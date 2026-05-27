export const metadata = {
  title: 'Welcome to Claude Code',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  );
}
