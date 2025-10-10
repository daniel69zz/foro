import styles from "./Link.module.css";

export default function Link({ children, href = "#", className, external = false, ...props }) {
  return (
    <a
      href={href}
      className={styles.link}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
