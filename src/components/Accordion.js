import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div style={styles.content}>{content}</div>}
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    border: "2px solid #007BFF",
    borderRadius: "8px",
    margin: "10px auto",
    overflow: "hidden",
    backgroundColor: "#f0f8ff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "white",
  },
  content: {
    padding: "10px",
    backgroundColor: "white",
    borderTop: "1px solid #ccc",
  },
};

export default Accordion;
