import cn from "../utils/cn";
import styles from "./Texto.module.css";
import {Home} from "lucide-react";

export default function Texto({ texto, icono, className, iconClassName, hasAnIcon = true}) {
  const Icon = icono || Home;
  return (
    <div className={cn(styles.texto, className)}>
      {hasAnIcon && <Icon className={cn(styles.icono, iconClassName)}/>}
      <span>{texto}</span>
    </div>
  );
}
