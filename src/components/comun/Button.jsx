import styles from "./Button.module.css";
import { NavLink } from "react-router-dom";

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
        <button
          className={styles.btn}
          data-variant={variant}
          data-size={size}
          {...props}
        >
          {children}
        </button>
      </NavLink>
    );
  }

  // Si no hay 'to', renderiza como botón normal
  return (
    <button
      className={styles.btn}
      data-variant={variant}
      data-size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
