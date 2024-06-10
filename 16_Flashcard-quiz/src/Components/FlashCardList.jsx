import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';

const FlashCardList = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setFlipped(false); // Reset de flip status
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
        setFlipped(false); // Reset de flip status
    };

    useEffect(() => {
        setFlipped(false); // Reset de flip status bij het laden van een nieuwe kaart
    }, [currentIndex]);

    return (
        <div className="flex flex-col items-center">
            <FlashCard 
                question={data[currentIndex].question} 
                answer={data[currentIndex].answer} 
                flipped={flipped}
                setFlipped={setFlipped}
            />
            <div className="flex mt-4">
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2" 
                    onClick={prevCard}
                >
                    Vorige
                </button>
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded" 
                    onClick={nextCard}
                >
                    Volgende
                </button>
            </div>
        </div>
    );
};

export default FlashCardList;