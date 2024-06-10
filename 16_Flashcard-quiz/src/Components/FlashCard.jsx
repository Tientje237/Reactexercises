import React from 'react';

const FlashCard = ({ question, answer, flipped, setFlipped }) => {
    return (
        <div className="card-container" onClick={() => setFlipped(!flipped)}>
            <div className={`card ${flipped ? 'flipped' : ''}`}>
                <div className="card-face card-front p-4 bg-white border rounded shadow-md cursor-pointer text-center">
                    {question}
                </div>
                <div className="card-face card-back p-4 bg-blue-500 text-white border rounded shadow-md cursor-pointer text-center">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FlashCard;
