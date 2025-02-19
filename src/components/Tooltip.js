import React, { useState } from "react";

const Tooltip = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        Di chuột vào tôi
      </button>
      {isVisible && <div style={styles.tooltip}>{message}</div>}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "inline-block",
    textAlign: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
  },
  tooltip: {
    position: "absolute",
    bottom: "120%",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "14px",
    borderRadius: "5px",
    whiteSpace: "nowrap",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },
};

export default Tooltip;
