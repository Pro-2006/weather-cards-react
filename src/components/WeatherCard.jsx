import { getIcon } from '../utils/icons';

export default function WeatherCard({ card, onDelete }) {
  const timeAgo = () => {
    const diff = Math.floor((Date.now() - card.timestamp) / 60000);
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff} min ago`;
    if (diff < 1440) return `${Math.floor(diff/60)}h ago`;
    return `${Math.floor(diff/1440)}d ago`;
  };

  return (
    <div style={{
      background: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', display: 'flex', flexDirection: 'column'
    }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'}
       onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
      <div style={{ padding: '1.5rem 1.5rem 1rem', position: 'relative' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2c3e50' }}>{card.city}</div>
        <div style={{ fontSize: '0.9rem', color: '#95a5a6' }}>{card.country}</div>
        <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#2c3e50', margin: '0.5rem 0' }}>
          {Math.round(card.temp)}<span style={{ fontSize: '1.5rem', color: '#7f8c8d' }}>{card.unit}</span>
        </div>
        <div style={{ textTransform: 'capitalize', color: '#667eea', fontWeight: 600 }}>{card.condition}</div>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '48px', height: '48px' }} dangerouslySetInnerHTML={{ __html: getIcon(card.condition) }} />
      </div>
      <div style={{ padding: '0 1.5rem 1rem', flexGrow: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {card.feels !== null && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
              <svg style={{ width: '20px', height: '20px', fill: '#667eea' }} viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13s-7-8-7-13a7 7 0 0 1 7-7Z"/></svg>
              Feels like {Math.round(card.feels)}{card.unit}
            </div>
          )}
          {card.humidity !== null && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
              <svg style={{ width: '20px', height: '20px', fill: '#667eea' }} viewBox="0 0 24 24"><path d="M12 2c-5 0-9 4-9 9s4 9 9 9c1.5 0 3-.5 4.5-1.5" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 15v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              {card.humidity}%
            </div>
          )}
          {card.wind !== null && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
              <svg style={{ width: '20px', height: '20px', fill: '#667eea' }} viewBox="0 0 24 24"><path d="M9 12h6M9 8h9M9 16h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              {card.wind.toFixed(1)} {card.windUnit}
            </div>
          )}
        </div>
      </div>
      <div style={{ padding: '1rem 1.5rem', background: '#f8f9fa', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#95a5a6' }}>
        <span>{timeAgo()}</span>
        <button onClick={() => onDelete(card.id)} style={{
          background: '#e74c3c', color: 'white', border: 'none', width: '36px', height: '36px',
          borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem'
        }}>×</button>
      </div>
    </div>
  );
}
