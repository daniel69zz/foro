import styles from "./Button.module.css";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
export default function Button({
  children,
  className,
  variant = "default",
  size = "md",
  to,
  onClick,
  ...props
}) {
  // Si hay prop 'to', renderiza como link
  if (to) {
    return (
      <NavLink to={to}>
        <Container
          className={styles.btn}
          data-variant={variant}
          data-size={size}
          {...props}
        >
          {children}
        </Container>
      </NavLink>
    );
  }

  // Si no hay 'to', renderiza como botón normal
  return (
    <Container
      className={styles.btn}
      data-variant={variant}
      data-size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </Container>
  );
}

const Container = styled.button`
  background-color: ${(props) => props.theme.cardcolor};
`;
