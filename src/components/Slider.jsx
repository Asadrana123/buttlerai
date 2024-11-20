import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCoffee, faMailBulk, faMessage, faMusic, faTicket } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    { text: "Latest JayZ concert in Boston", icon: faMusic },
    { text: "Fireside chat with CTO of OpenAI at MIT on 25th November", icon: faMessage},
    { text: "Cheap flight tickets to Denver in December", icon: faTicket },
    { text: "⁠New coffee shop opening at Newbury street", icon: faCoffee },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`slider-item ${
              index === currentIndex ? "visible" : "hidden"
            }`}
          >
            <FontAwesomeIcon icon={message.icon} className="slider-icon" />
            <span>{message.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
