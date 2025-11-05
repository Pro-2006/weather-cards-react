import { useState, useEffect } from 'react';

const STORAGE_KEY = 'weatherCards';

export const useWeatherCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setCards(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  const addCard = (card) => setCards(prev => [...prev, { ...card, id: Date.now(), timestamp: Date.now() }]);
  const removeCard = (id) => setCards(prev => prev.filter(c => c.id !== id));
  const clearAll = () => setCards([]);

  return { cards, addCard, removeCard, clearAll };
};
