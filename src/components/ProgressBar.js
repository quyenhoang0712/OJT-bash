import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <div style={styles.container}>
      <h2>Progress Bar</h2>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progress, width: `${progress}%` }}></div>
      </div>
      <p>{progress}%</p>
      <div>
        <button onClick={decreaseProgress} style={styles.button}>-</button>
        <button onClick={increaseProgress} style={styles.button}>+</button>
      </div>
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
  progressBar: {
    width: "300px",
    height: "20px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    overflow: "hidden",
    margin: "10px auto",
  },
  progress: {
    height: "100%",
    backgroundColor: "#007BFF",
    transition: "width 0.3s ease-in-out",
  },
  button: {
    margin: "5px",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
  },
};

export default ProgressBar;
