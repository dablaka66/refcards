import React, { useState, useEffect } from "react";
import getDeck from "./getDeck";
import getCard from "./getCard";
import Card from "./card";

const Deck = () => {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
	

  const getDeck = async () => {
    //const userId = Math.floor(Math.random() * 10) + 1;
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const res = await fetch(url);
    const deck = await res.json();
    return deck;
  };

  const getCards = async (deck) => {
    //const userId = Math.floor(Math.random() * 10) + 1;
    console.log("deck en getCards", deck);
    const url = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`;
    const res = await fetch(url);
    const obj = await res.json();
    console.log("card devuelta por el API", obj.cards[0]);
    const newCard = obj.cards[0];
		console.log('newCard: ', newCard);
		return newCard;
  };

  console.log("deck", deck);

  const updateDeck = () => {
    getDeck().then((newdeck) => {
      console.log("newdeck", newdeck);
      setDeck(newdeck);
    });
  };

  useEffect(() => {
    updateDeck();
    console.log("deck in useeffect", deck);
  }, []);

  const updateCards = () => {
    getCards(deck.deck_id).then((newCard) => {
      setCards([...cards, newCard]); //why setcasds doesn't update cards
      console.log("newCard: ", newCard);

      console.log("cards: despues de setcards ", cards);
    });
  };

  useEffect(() => {
    if (deck.deck_id) {
      updateCards();
      console.log("cards in useEffect(deck)", cards);
    }
  }, [deck]);

  function handleClick(e) {
    updateCards();
  }

  const deckArea = () => {};
  return (
    <div>
      <div id="deckArea">
					{cards.map((c) => (
            <Card
              key={Date.now() + c.code}
							id={c.code}
              className="card"
              alt={"c.suit"}
              image={c.image}
							name={c.suit + " " + c.code}
              style="transform"
            />
          ))}
        </div>
      <button onClick={handleClick}>New card</button>
    </div>
  );
};

export default Deck;
