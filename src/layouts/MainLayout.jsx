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
      <Aside>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </Aside>
      <Main>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
        <Foot>
          <Footer />
        </Foot>
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    &.active {
      grid-template-columns: 1fr;
    }
  }
`;

const Aside = styled.aside`
  /* 👉 Ocultar sidebar en mobile */
  @media (max-width: 768px) {
    display: none;
  }
`;

const Foot = styled.footer`
  /* 👉 Ocultar footer en mobile */
  @media (max-width: 768px) {
    display: none;
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
