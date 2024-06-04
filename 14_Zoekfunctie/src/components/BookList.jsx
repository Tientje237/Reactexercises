import { useState } from 'react';
import Book from './Book'
const Booklist = () => {

    const [book, setBook] = useState([
        {
            title : "Interesting Facts For Corious Minds",
            author : "Jordan Moore",
            img : "./public/images/CuriousMinds.png" 
        },
        {
            title : "Atomic habits",
            author : "James Clear",
            img : "./images/AtomicHabits.png"
        },
        {
            title : "Fairy Tale",
            author : "Stephen King",
            img : "images/FairyTale.png"
        }
    ]);

    const [searchInput, setSearchInput] = useState(' ');


    return (  
        <div>

            {book.map((book, index) => (
                <Book
                    key={index}
                    img={book.img}
                    title={book.title}
                    author={book.author}
                />
            ))}
        </div>
    );
}

export default Booklist;