# Weather Cards React

A modern, beautiful weather cards application built with React + Vite. Add cities manually, view weather information in stunning cards, and persist data locally.

## ✨ Features

- 🌆 **Beautiful UI**: Modern gradient background with smooth animations
- 🏛️ **Manual Input**: Add cities with full weather details
- 💾 **Local Storage**: Cards persist across browser sessions
- 🎨 **Weather Icons**: Dynamic SVG icons based on conditions
- 📱 **Responsive**: Works perfectly on desktop and mobile
- ⏱️ **Timestamps**: Shows when each card was added
- ✅ **Form Validation**: Ensures valid data entry

## 🛠️ Tech Stack

- **React 18.3** - Modern React with hooks
- **Vite 5** - Lightning-fast build tool
- **CSS-in-JS** - Inline styling for component encapsulation
- **LocalStorage API** - Data persistence

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Pro-2006/weather-cards-react.git
cd weather-cards-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📚 Project Structure

```
weather-cards-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header
│   │   ├── WeatherForm.jsx     # Input form
│   │   ├── WeatherCard.jsx     # Weather display card
│   │   └── EmptyState.jsx      # Empty state UI
│   ├── hooks/
│   │   └── useWeatherCards.js  # Custom hook for state
│   ├── utils/
│   │   └── icons.js            # Weather SVG icons
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📝 How to Use

1. **Add a Card**: Fill in the form with:
   - City name (required)
   - Country code (optional)
   - Temperature unit (°C or °F)
   - Current temperature (required)
   - Feels like temperature
   - Weather condition (sunny, cloudy, rainy, etc.)
   - Humidity percentage
   - Wind speed
   - Wind unit (km/h, mph, m/s)

2. **View Cards**: Cards display with:
   - City name and country
   - Current temperature
   - Weather condition with icon
   - Feels like, humidity, and wind (if provided)
   - Time since card was added

3. **Delete Cards**: Click the × button on any card

4. **Clear All**: Remove all cards at once

## 🎨 Component Architecture

### Custom Hook: `useWeatherCards`
- Manages state with `useState`
- Syncs with localStorage using `useEffect`
- Provides CRUD operations: add, remove, clear

### Components
- **Header**: Displays app title and description
- **WeatherForm**: Form with validation and state management
- **WeatherCard**: Individual card with animations and icons
- **EmptyState**: Friendly UI when no cards exist

## 🔧 Key Features Implementation

### Data Persistence
```javascript
useEffect(() => {
  localStorage.setItem('weatherCards', JSON.stringify(cards));
}, [cards]);
```

### Dynamic Icons
Icons change based on weather conditions:
- Sunny ☀️
- Cloudy ☁️
- Rainy 🌧️
- Snowy ❄️
- Thunderstorm ⛈️
- Foggy 🌫️

### Form Validation
- City name required
- Temperature must be numeric
- Humidity: 0-100%
- Wind speed: positive number

## 💻 Development

### Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌟 Screenshots

- Beautiful gradient background
- Responsive grid layout
- Smooth hover animations
- Clean, modern UI

## 📦 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/weather-cards-react/'
})
```

2. Install gh-pages:
```bash
npm install -D gh-pages
```

3. Add deploy script to `package.json`:
```json
"deploy": "vite build && gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

## 📝 License

MIT License - feel free to use this project for learning or personal use.

## 👨‍💻 Author

Created with ❤️ using React + Vite

---

**Built with modern best practices:**
- Component-based architecture
- Custom hooks for state management
- Inline styling for encapsulation
- Form validation
- LocalStorage persistence
- Responsive design
- Smooth animations
