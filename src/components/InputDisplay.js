import React, { useState } from "react";

const InputDisplay = () => {
  const [text, setText] = useState(""); 
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Nhập và hiển thị</h2>
      <input
        type="text"
        placeholder="Nhập vào đây..."
        value={text}
        onChange={handleChange}
        style={styles.input}
      />
      <p style={styles.output}>Bạn đã nhập: {text}</p>
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
  input: {
    padding: "10px",
    width: "250px",
    fontSize: "16px",
    border: "1px solid #007BFF",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  output: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007BFF",
  },
};

export default InputDisplay;
