import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/open-sans";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/300.css"; // Light
import "@fontsource/open-sans/400.css"; // Regular
import "@fontsource/open-sans/500.css"; // Medium
import "@fontsource/open-sans/600.css"; // Semi-Bold]
import "@fontsource/open-sans/800.css"; // Extra-Bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
