import { useWeatherCards } from './hooks/useWeatherCards';
import WeatherForm from './components/WeatherForm';
import WeatherCard from './components/WeatherCard';
import EmptyState from './components/EmptyState';
import Header from './components/Header';

export default function App() {
  const { cards, addCard, removeCard, clearAll } = useWeatherCards();

  const handleAdd = (data) => {
    if (data === 'CLEAR_ALL') {
      if (window.confirm('Delete all weather cards?')) clearAll();
    } else {
      addCard(data);
    }
  };

  return (
    <>
      <Header />
      <WeatherForm onAdd={handleAdd} />
      {cards.length === 0 ? <EmptyState /> : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {cards.map(card => (
            <WeatherCard key={card.id} card={card} onDelete={removeCard} />
          ))}
        </div>
      )}
    </>
  );
}
