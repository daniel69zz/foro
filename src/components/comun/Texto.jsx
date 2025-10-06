import cn from "../utils/cn";
import styles from "./Texto.module.css";
import {Home} from "lucide-react";

import styled from "styled-components";

export default function Texto({ children, icono, className, iconClassName, hasAnIcon = true}) {
  const Icon = icono || Home;
  return (
    <Container className={cn(styles.texto, className)}>
      {hasAnIcon && <Icon className={cn(styles.icono, iconClassName)}/>}
      <span>{children}</span>
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.text};
`;

