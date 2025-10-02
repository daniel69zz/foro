import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./routers/routes"

import { Sidebar } from './components/comun/Sidebar';
import { Light, Dark } from "./styles/Theme"

import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { Navbar } from "./components/comun/Navbar";


export const ThemeContext = React.createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{setTheme, theme}}>
        <ThemeProvider theme = {themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "active" : ""}>
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
              <Main>
                <Navbar/>
                <MyRoutes/>
              </Main>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
        
      </ThemeContext.Provider>
      
    </>
  )
}
const Container = styled.div`
    display: grid;
    grid-template-columns: 120px auto;    // antes 90px
    background: ${({theme}) => theme.bgtotal};
    min-height: 100vh;
    transition: all 0.3s;
    &.active{
      grid-template-columns: 300px auto;
    }
`;


const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export default App
