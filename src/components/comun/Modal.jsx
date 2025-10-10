export default function ModalLogin({ children, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // background: "rgba(0,0,0,0.5)", // fondo oscuro
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
      onClick={onClose} // si haces clic fuera, se cierra
    >
      <div
        style={{
          borderRadius: "1rem",
          padding: "2rem",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // evita cierre si haces clic dentro
      >
        {children}
      </div>
    </div>
  );
}
