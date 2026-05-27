export default function Home() {
  return (
    <main style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Helvetica Neue', sans-serif",
      background: '#0a0a0a',
      color: '#f5f5f5',
      gap: '1rem',
    }}>
      <p style={{ margin: 0, fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' }}>
        Welcome to
      </p>
      <h1 style={{ margin: 0, fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
        Claude Code
      </h1>
      <p style={{ margin: 0, fontSize: '1rem', color: '#666', maxWidth: '320px', textAlign: 'center', lineHeight: 1.6 }}>
        Your AI-powered coding assistant, right in the terminal.
      </p>
    </main>
  );
}
