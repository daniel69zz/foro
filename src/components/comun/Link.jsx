import cn from "../utils/cn";
import styles from "./Link.module.css";

export default function Link({ children, href = "#", className, external = false, ...props }) {
  return (
    <a
      href={href}
      className={cn(styles.link, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
