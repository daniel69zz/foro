// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routers/routes";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./styles/Theme";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
