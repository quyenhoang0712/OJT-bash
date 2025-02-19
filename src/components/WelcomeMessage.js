import React from "react";

const WelcomeMessage = ({ name }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>Chào mừng, {name}!</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    padding: "15px",
    border: "2px solid #28a745",
    borderRadius: "8px",
    backgroundColor: "#e6ffe6",
    display: "inline-block",
  },
  text: {
    color: "#28a745",
    fontSize: "22px",
    fontWeight: "bold",
  },
};

export default WelcomeMessage;
