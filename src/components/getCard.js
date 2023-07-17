const getCard =async(deck) => {
    //const userId = Math.floor(Math.random() * 10) + 1;
    const url = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`;
    const res = await fetch(url);
    const card =await res.json();
    return card;
};
export default getCard;