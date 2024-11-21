import React from "react";
import "./WaitListButton.css";
import { useState } from "react";
import Form from "./Form";
const WaitlistButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  }
  const handleClose = () => {
    setOpenModal(false);
  }
  return (
    <>
      {/* <button  onClick={handleOpen} className="waitlist-button">
      Join the waitlist
    </button> */}
      <button
        onClick={handleOpen}
        class="waitlist-button">
        Join the waitlist
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Form
        openModal={openModal}
        onOpen={handleOpen}
        onClose={handleClose}
      />
    </>
  );
};

export default WaitlistButton;
