const Menu = ({img, title, price, desc}) => {
    return ( 
        
        <>
            <img src={img} />
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{desc}</p>
        </>
    );
}

export default Menu;