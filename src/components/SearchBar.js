import React, { useState } from "react";

const items = ["Apple", "Banana", "Cherry", "Date", "Grape", "Lemon", "Mango", "Orange"];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    setFilteredItems(items.filter((item) => item.toLowerCase().includes(value)));
  };

  return (
    <div style={styles.container}>
      <h2>Tìm kiếm</h2>
      <input
        type="text"
        placeholder="Nhập từ khóa..."
        value={query}
        onChange={handleSearch}
        style={styles.input}
      />
      <ul style={styles.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} style={styles.listItem}>{item}</li>
          ))
        ) : (
          <li style={styles.noResult}>Không có kết quả phù hợp</li>
        )}
      </ul>
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
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007BFF",
    padding: "5px 0",
  },
  noResult: {
    fontSize: "16px",
    color: "red",
  },
};

export default SearchBar;
