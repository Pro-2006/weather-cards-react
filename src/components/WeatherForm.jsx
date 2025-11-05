import { useState } from 'react';

export default function WeatherForm({ onAdd }) {
  const [form, setForm] = useState({
    city: '', country: '', unit: '°C', temp: '', feels: '', condition: '', humidity: '', wind: '', windUnit: 'km/h'
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.temp || isNaN(form.temp)) newErrors.temp = 'Valid temperature required';
    if (form.humidity && (form.humidity < 0 || form.humidity > 100)) newErrors.humidity = '0–100%';
    if (form.wind && form.wind < 0) newErrors.wind = 'Wind ≥ 0';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onAdd({
      ...form,
      temp: parseFloat(form.temp),
      feels: form.feels ? parseFloat(form.feels) : null,
      humidity: form.humidity ? parseInt(form.humidity) : null,
      wind: form.wind ? parseFloat(form.wind) : null,
      condition: form.condition || 'clear'
    });

    setForm({
      city: '', country: '', unit: '°C', temp: '', feels: '', condition: '', humidity: '', wind: '', windUnit: 'km/h'
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'City *', name: 'city', type: 'text', placeholder: 'Tokyo' },
          { label: 'Country Code', name: 'country', type: 'text', placeholder: 'JP', maxLength: 2 },
          { label: 'Unit', name: 'unit', type: 'select', options: ['°C', '°F'] },
          { label: 'Temperature *', name: 'temp', type: 'number', placeholder: '23', step: 0.1 },
          { label: 'Feels Like', name: 'feels', type: 'number', placeholder: '25', step: 0.1 },
          { label: 'Condition', name: 'condition', type: 'text', placeholder: 'Sunny, Rain' },
          { label: 'Humidity %', name: 'humidity', type: 'number', placeholder: '65', min: 0, max: 100 },
          { label: 'Wind Speed', name: 'wind', type: 'number', placeholder: '12', step: 0.1 },
          { label: 'Wind Unit', name: 'windUnit', type: 'select', options: ['km/h', 'mph', 'm/s'] },
        ].map(field => (
          <div key={field.name} style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontWeight: 600, fontSize: '0.9rem', color: '#444', marginBottom: '0.4rem' }}>
              {field.label} {field.label.includes('*') && <span style={{ color: '#e74c3c' }}>*</span>}
            </label>
            {field.type === 'select' ? (
              <select name={field.name} value={form[field.name]} onChange={handleChange}
                style={{ padding: '0.75rem', border: '2px solid #e1e5e9', borderRadius: '0.75rem', fontSize: '1rem' }}>
                {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            ) : (
              <input
                type={field.type} name={field.name} value={form[field.name]} onChange={handleChange}
                placeholder={field.placeholder} step={field.step} min={field.min} max={field.max} maxLength={field.maxLength}
                style={{ padding: '0.75rem', border: '2px solid #e1e5e9', borderRadius: '0.75rem', fontSize: '1rem' }}
              />
            )}
            {errors[field.name] && <span style={{ color: '#e74c3c', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors[field.name]}</span>}
          </div>
        ))}
      </div>
      <button type="submit" style={{
        padding: '0.75rem 1.5rem', background: '#667eea', color: 'white', border: 'none', borderRadius: '0.75rem',
        fontWeight: 600, cursor: 'pointer', marginRight: '0.75rem'
      }}>Add Card</button>
      <button type="button" onClick={() => window.confirm('Delete all?') && onAdd('CLEAR_ALL')}
        style={{ padding: '0.75rem 1.5rem', background: '#ecf0f1', color: '#7f8c8d', border: 'none', borderRadius: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
        Clear All
      </button>
    </form>
  );
}
