import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null); // Tạo tham chiếu đến input

  useEffect(() => {
    inputRef.current.focus(); // Tự động focus khi component mount
  }, []);

  return (
    <div style={styles.container}>
      <h2>Nhập thông tin</h2>
      <input
        type="text"
        placeholder="Tự động focus..."
        ref={inputRef}
        style={styles.input}
      />
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
  },
};

export default FocusInput;
