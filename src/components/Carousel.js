import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Image+2",
  "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Image+3",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={styles.container}>
      <h2>Image Carousel</h2>
      <div style={styles.imageContainer}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={styles.image} />
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={handlePrevious} style={styles.button}>Previous</button>
        <button onClick={handleNext} style={styles.button}>Next</button>
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
  imageContainer: {
    margin: "10px 0",
  },
  image: {
    width: "600px",
    height: "300px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
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
};

export default Carousel;
