import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái mở/đóng dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleDropdown} style={styles.button}>
        {isOpen ? "Đóng Menu" : "Mở Menu"}
      </button>
      {isOpen && (
        <ul style={styles.dropdown}>
          <li style={styles.option}>Tùy chọn 1</li>
          <li style={styles.option}>Tùy chọn 2</li>
          <li style={styles.option}>Tùy chọn 3</li>
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    position: "relative",
    display: "inline-block",
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
  dropdown: {
    listStyle: "none",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
    position: "absolute",
    width: "120px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  option: {
    padding: "8px",
    cursor: "pointer",
    textAlign: "left",
    transition: "background-color 0.2s",
  },
};

export default DropdownMenu;
