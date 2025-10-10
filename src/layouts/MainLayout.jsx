// src/layouts/MainLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/comun/Navbar";
import { Sidebar } from "../components/comun/Sidebar";
import Footer from "../components/comun/Footer"
import styled from "styled-components";

export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return (
    <Container className={sidebarOpen ? "active" : ""}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Main>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Main>
    </Container>
  );
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
