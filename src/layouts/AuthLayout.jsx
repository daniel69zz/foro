// src/layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function AuthLayout() {
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
}

const AuthWrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.bgtotal};
`;