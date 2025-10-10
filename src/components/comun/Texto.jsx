import styles from "./Texto.module.css";
import {Home} from "lucide-react";

import styled from "styled-components";

export function Texto({ children, icono, className, iconClassName, hasAnIcon = true}) {
  const Icon = icono || Home;
  return (
    <Container className={styles.texto}>
      {hasAnIcon && <Icon className={styles.icono}/>}
      <span>{children}</span>
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.text};
`;

