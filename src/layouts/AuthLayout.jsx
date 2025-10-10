// layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function AuthLayout() {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
}

const Wrap = styled.main`
  min-height: 100dvh;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.bgtotal};
`;
