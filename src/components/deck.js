import React, {useState,useEffect} from 'react';
import getDeck from './getDeck';
import getCard from './getCard';

const Deck = () => {
  const deck = getDeck;  
	console.log('deck',deck);
  /* const updateDeck = () => {
    getDeck
      .then((newdeck) => {
				console.log('newdeck',newdeck)
        //setUser(newuser);
      });
		} */
		//updadeck;
		useEffect(() => {
			updateDeck();
		},[]);
    return (
    <div>
    <div id="deckArea" >Deck</div>
    <button>New card</button>
    </div>
  )
}

export default Deck;