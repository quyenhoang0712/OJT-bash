import React from "react";

const Greeting = ({ name }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>Xin chào, {name}!</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    padding: "20px",
    border: "2px solid #007BFF",
    borderRadius: "8px",
    backgroundColor: "#f0f8ff",
    display: "inline-block",
  },
  text: {
    color: "#007BFF",
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default Greeting;
