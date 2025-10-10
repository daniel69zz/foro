import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./routers/routes"

import { Navbar } from "./components/comun/Navbar";
import { Sidebar } from './components/comun/Sidebar';
import { Light, Dark } from "./styles/Theme"

import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import Modal from "./components/comun/Modal";
import LoginPage from "./pages/Login";

// import {ModalLogin} from "./components/comun/Modal.login";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{setTheme, theme}}>
        <ThemeProvider theme = {themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "active" : ""}>
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
              <Main>
                <Navbar onLoginClick={() => setShowLogin(true)} />
                <Content>
                  <MyRoutes/>
                </Content>
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
  /* min-height: 100vh; */
  height: 100dvh;
  min-height: 0;

  transition: all 0.3s;
  &.active{
    /* grid-template-columns: 300px auto; */
    grid-template-columns: 300px 1fr;
  }
`;


const Main = styled.main`
  /* flex: 1;
  display: flex;
  flex-direction: column; */

  display: grid;
  grid-template-rows: auto 1fr;
  min-width: 0;
  min-height: 0;
`;

const Content = styled.div`
  overflow: auto;   /* ⬅️ el scroll vive aquí */
  min-height: 0;
  -webkit-overflow-scrolling: touch;
`;
export default App
