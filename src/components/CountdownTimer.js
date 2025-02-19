import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialMinutes = 10 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // Chuyển phút sang giây

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Dọn dẹp khi component unmount
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={styles.container}>
      <h2>Bộ đếm ngược</h2>
      <div style={styles.timer}>{formatTime(timeLeft)}</div>
      {timeLeft === 0 && <p style={styles.finished}>Hết giờ!</p>}
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
  timer: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#007BFF",
    margin: "10px 0",
  },
  finished: {
    fontSize: "18px",
    color: "red",
  },
};

export default CountdownTimer;
