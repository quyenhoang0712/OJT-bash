import React, { useState } from "react";
import Modal from "./Modal";

const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Modal Example</h2>
      <button 
        onClick={() => setIsModalOpen(true)} 
        style={{ padding: "10px 15px", cursor: "pointer" }}>
        Mở Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ModalExample;
