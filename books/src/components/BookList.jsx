import Book from './Book'
const Booklist = () => {
    return (  
        <div>
            <Book title ="Interesting Facts For Corious Minds" author ="Jordan Moore" img="/public/images/CuriousMinds.png"/>
            <Book title ="Atomic habits" author ="James Clear" img="/public/images/AtomicHabits.png"/>
            <Book title ="Fairy Tale" author ="Stephen King" img="/public/images/FairyTale.png"/>
        </div>
    );
}

export default Booklist;