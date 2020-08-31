
import React from 'react';
import './SearchResults.css'
import Card from './Card.js'
const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
    return (
        <div id="results">
            <h3>Here's what we found ({results.length} results):</h3>
            <div className="CardList">
                { // new
                    results.map(result => (
                        <Card key={result.id}
                            addCardToDeck={addCardToDeck}
                            removeCardFromDeck={removeCardFromDeck}
                            {...result} />
                    ))
                }
            </div>
        </div>
    );
}


// you can only have one DEFAULT per file, default export (un-named) 
// You can have more than one per project
export default SearchResults;