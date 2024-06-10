import React from 'react';

const FlashCard = ({ question, answer, flipped, setFlipped }) => {
    return (
        <div 
            className="p-4 bg-white border rounded shadow-md cursor-pointer text-center"
            onClick={() => setFlipped(!flipped)}
        >
            {flipped ? answer : question}
        </div>
    );
};

export default FlashCard;
