import React, { useState, useEffect } from "react";



const Card = (card) => {
  
    const [{ angle, xPos, yPos }] = useState({
        angle: Math.random() * 90 - 45,
        xPos: Math.random() * 40 - 20,
        yPos: Math.random() * 40 - 20,
      });
    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    return (
    <img
      className="Card"
      alt={card.name}
      src={card.image}
      style={{ transform }} />
  );
}

export default Card;
