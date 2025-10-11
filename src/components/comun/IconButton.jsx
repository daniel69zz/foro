import { X } from "lucide-react";
import styles from "./IconButton.module.css";
import { NavLink } from "react-router-dom";

import cn from "../utils/cn";

export default function IconButton({ className, ...props }) {
  return (
    <NavLink to={props.to} style={{ marginLeft: "auto" }}>
      <button className={cn(styles.btn, className)}>
        <X size={20} className={cn(styles.icon, className)} />
      </button>
    </NavLink>
  );
}
