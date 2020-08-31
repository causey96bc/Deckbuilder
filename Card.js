import React from 'react';
import './Card.css'
const Card = (props) => {
    const { id, name, manaCost, type, text, flavor, imageUrl, addCardToDeck, removeCardFromDeck } = props
    return (
        <div className="Card">
            <div className="info">
                <p className="header">
                    {name} - {manaCost}
                </p>
                <p className="type">
                    {type}
                </p>
                <p className="text">
                    {text}
                </p>
                <p className="flavor">
                    {flavor}
                </p>
            </div>
            <img className="preview" src={imageUrl} />
            <div className="actions">
                <button onClick={() => {
                    addCardToDeck({ id, name })

                }}>(+) Add to Deck</button>


                <button onClick={() => {
                    removeCardFromDeck({ id })
                }} >(-) Remove from Deck</button>
            </div>
        </div>
    );
}

export default Card;