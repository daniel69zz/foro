import styles from "./Texto.module.css";
import { Home } from "lucide-react";
import cn from "../utils/cn";

import styled from "styled-components";

export function Texto({
  children,
  icono,
  className,
  iconClassName,
  hasAnIcon = true,
}) {
  const Icon = icono || Home;
  return (
    <Container className={cn(styles.texto, className)}>
      {hasAnIcon && <Icon className={cn(styles.icono, className)} />}
      <span>{children}</span>
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.text};
`;
