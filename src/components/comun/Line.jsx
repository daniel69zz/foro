import styles from "./Line.module.css";

export default function Line({
  color = "rgba(0, 0, 0, 0.15)",
  marginTop = "10px",
  marginBottom = "10px",
  width = "100%",
  height = "1px",
  className,
}) {
  const style = {
    backgroundColor: color,
    marginTop,
    marginBottom,
    width,
    height,
  };

  return <div className={`${styles.line} ${className || ""}`} style={style}></div>;
}
