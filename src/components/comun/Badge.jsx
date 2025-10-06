import styles from "./Badge.module.css";
import cn from "../utils/cn";
import styled from "styled-components";

export function Badge({ text, className, variant = "default", ...props }) {
  return (
    <Container
      className={cn(styles.badge, className)}
      data-variant={variant}
      {...props}
    >{text}
    </Container>
  );
}

const Container = styled.span`
  color: ${(props) => props.theme.labelcolor};
`;