const Book = ({title, author, img}) => {
    return ( 
        <div>
            <img src={img}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
            
        </div>
    );
};

export default Book;