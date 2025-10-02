// import { Slot } from "@radix-ui/react-slot"; // opcional, si quieres asChild
import styles from "./Badge.module.css";
import cn from "../utils/cn";


export function Badge({ text, className, variant = "default", asChild = false, ...props }) {
//   const Comp = asChild ? Slot : "span";
  return (
    <span
      className={cn(styles.badge, className)}
      data-variant={variant}
      {...props}
    >{text}
    </span>
  );
}