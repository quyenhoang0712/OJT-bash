import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); 
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.text}>Số lần nhấn: {count}</h2>
      <button style={styles.button} onClick={handleClick}>
        Nhấn vào tôi
      </button>
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
    fontSize: "22px",
    fontWeight: "bold",
    color: "#007BFF",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    fontSize: "18px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
  },
};

export default Counter;
