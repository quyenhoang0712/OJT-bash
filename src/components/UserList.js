import React from "react";

const UserList = () => {
    const users = ["An", "Bình", "Cường"]
  return (
    <div style={styles.container}>
      <h2>Danh sách người dùng</h2>
      <ul style={styles.list}>
        {users.map((user, index) => (
          <li key={index} style={styles.listItem}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    padding: "20px",
    border: "2px solid #28a745",
    borderRadius: "8px",
    backgroundColor: "#e6ffe6",
    display: "inline-block",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#28a745",
    padding: "5px 0",
  },
};

export default UserList;
