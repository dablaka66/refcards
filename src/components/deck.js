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

	const getCards =async(deck) => {
    //const userId = Math.floor(Math.random() * 10) + 1;
		console.log("deck en getCards",deck);
    const url = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`;
    const res = await fetch(url);
    const card =await res.json();
    return card;
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
		console.log("deck in useeffect",deck)
  }, []);

const updateCards = () => {
	getCards(deck.deck_id).then((newCards) => {
		setCards(newCards)
	})
};

useEffect(() => {
	if(deck.deck_id){updateCards();
	console.log("cards", cards)}
}, [deck]);
return (
    <div>
      <div id="deckArea">
				{cards.map( (c) =>(
					<Card className="card"
						alt={c.name}
						src={c.image}
						style="transform" />
				))}
			</div>
      <button>New card</button>
    </div>
  );
};

export default Deck;
