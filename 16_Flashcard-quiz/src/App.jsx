import React from 'react';
import FlashCardList from './Components/FlashCardList';
import data from './data';

function App() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Hoofdsteden Quiz</h1>
            <FlashCardList data={data} />
        </div>
    );
}

export default App;
