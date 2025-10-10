import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./routers/routes"

import { Navbar } from "./components/comun/Navbar";
import { Sidebar } from './components/comun/Sidebar';
import Footer from "./components/comun/Footer";
import { Light, Dark } from "./styles/Theme"

import styled from "styled-components"
import { ThemeProvider } from "styled-components"

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
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
                <Navbar className="navbar"/>
                <Content>
                  <MyRoutes/>
                </Content>
                <Footer />
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
  grid-template-columns: 120px auto;    
  background: ${({theme}) => theme.bgtotal};
  height: 100dvh;
  min-height: 0;

  transition: all 0.3s;
  &.active{
    grid-template-columns: 300px 1fr;
  }
`;


const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  min-width: 0;
  min-height: 0;
`;

const Content = styled.div`
  overflow: auto;   
  min-height: 0;
  -webkit-overflow-scrolling: touch;
`;
export default App
