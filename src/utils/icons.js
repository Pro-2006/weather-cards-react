export const ICONS = {
  sun: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="14" fill="#f39c12"/><path d="M32 2v8M32 54v8M12 12l5.5 5.5M46.5 46.5l5.5 5.5M2 32h8M54 32h8M12 52l5.5-5.5M46.5 17.5l5.5-5.5" stroke="#f39c12" stroke-width="3" fill="none"/></svg>`,
  cloud: `<svg viewBox="0 0 64 64"><path d="M48 36a10 10 0 0 1-10 10H18a10 10 0 0 1 0-20c1 0 2 .2 3 .5A12 12 0 0 1 38 24a11.9 11.9 0 0 1 10 12Z" fill="#95a5a6"/></svg>`,
  rain: `<svg viewBox="0 0 64 64"><path d="M48 36a10 10 0 0 1-10 10H18a10 10 0 0 1 0-20c1 0 2 .2 3 .5A12 12 0 0 1 38 24a11.9 11.9 0 0 1 10 12Z" fill="#95a5a6"/><path d="M22 46v8M28 48v10M34 46v8" stroke="#3498db" stroke-width="2" stroke-linecap="round"/></svg>`,
  snow: `<svg viewBox="0 0 64 64"><path d="M48 36a10 10 0 0 1-10 10H18a10 10 0 0 1 0-20c1 0 2 .2 3 .5A12 12 0 0 1 38 24a11.9 11.9 0 0 1 10 12Z" fill="#95a5a6"/><circle cx="24" cy="50" r="1.5" fill="#ecf0f1"/><circle cx="30" cy="52" r="1.5" fill="#ecf0f1"/><circle cx="36" cy="50" r="1.5" fill="#ecf0f1"/></svg>`,
  thunderstorm: `<svg viewBox="0 0 64 64"><path d="M48 36a10 10 0 0 1-10 10H18a10 10 0 0 1 0-20c1 0 2 .2 3 .5A12 12 0 0 1 38 24a11.9 11.9 0 0 1 10 12Z" fill="#95a5a6"/><path d="M26 46l-4 8h6l-3 8M34 48l-4 8h6l-3 8" stroke="#f1c40f" stroke-width="2" fill="none"/></svg>`,
  fog: `<svg viewBox="0 0 64 64"><path d="M10 40h44M14 46h36M8 52h48" stroke="#bdc3c7" stroke-width="4" stroke-linecap="round"/><path d="M48 36a10 10 0 0 1-10 10H18a10 10 0 0 1 0-20c1 0 2 .2 3 .5A12 12 0 0 1 38 24a11.9 11.9 0 0 1 10 12Z" fill="#95a5a6" opacity="0.6"/></svg>`
};

export const getIcon = (condition) => {
  const key = condition.includes('rain') || condition.includes('drizzle') ? 'rain' :
              condition.includes('snow') ? 'snow' :
              condition.includes('thunder') || condition.includes('storm') ? 'thunderstorm' :
              condition.includes('cloud') ? 'cloud' :
              condition.includes('fog') || condition.includes('haze') || condition.includes('mist') ? 'fog' :
              'sun';
  return ICONS[key];
};
