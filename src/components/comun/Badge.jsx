import styles from "./Badge.module.css";
import styled from "styled-components";

export function Badge({ text, className, variant = "default", pad=true, ...props }) {
  return (
    <Container
      className={styles.badge}
      data-variant={variant}
      data-pad={pad}
      {...props}
    >{text}
    </Container>
  );
}

const Container = styled.span`
  color: ${(props) => props.theme.labelcolor};
`;