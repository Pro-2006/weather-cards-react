export default function EmptyState() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'white',
      borderRadius: '1.5rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>Partly cloudy</div>
      <h2 style={{ fontSize: '1.8rem', color: '#2c3e50' }}>No weather cards yet</h2>
      <p style={{ color: '#7f8c8d', maxWidth: '500px', margin: '0 auto' }}>
        Fill in the form above and click <strong>Add Card</strong> to get started.
      </p>
    </div>
  );
}
