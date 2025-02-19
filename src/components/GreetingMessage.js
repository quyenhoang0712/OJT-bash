import React from "react";

const GreetingMessage = ({ isAdmin }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>
        {isAdmin ? "Xin chào, Admin!" : "Xin chào, Khách!"}
      </h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    padding: "15px",
    border: "2px solid #007BFF",
    borderRadius: "8px",
    backgroundColor: "#f0f8ff",
    display: "inline-block",
  },
  text: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#007BFF",
  },
};

export default GreetingMessage;
