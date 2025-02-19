import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [loading, setLoading] = useState(false);

  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 10 }, (_, i) => `Item ${prevItems.length + i + 1}`)
      ]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Infinite Scroll</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>{item}</li>
        ))}
      </ul>
      {loading && <p style={styles.loading}>Đang tải thêm...</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    padding: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "5px 0",
    borderBottom: "1px solid #ddd",
  },
  loading: {
    fontSize: "16px",
    color: "#007BFF",
    marginTop: "10px",
  },
};

export default InfiniteScroll;
