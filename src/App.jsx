// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routers/routes";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./styles/Theme";

export const ThemeContext = React.createContext(null);

/* ErrorBoundary simple */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20 }}>
          <h2>Ocurrió un error al renderizar la aplicación</h2>
          <pre style={{ whiteSpace: "pre-wrap", color: "red" }}>
            {String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [theme, setTheme] = useState("dark");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <ErrorBoundary>
            <MyRoutes />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
