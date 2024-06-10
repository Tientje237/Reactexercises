import React from 'react';
import FlashCardList from './Components/FlashCardList';
import data from './data';

function App() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Hoofdsteden Quiz</h1>
                <FlashCardList data={data} />
            </div>
        </div>
    );
}

export default App;