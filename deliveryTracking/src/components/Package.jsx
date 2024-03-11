const Package = ({name, orderID, status}) => {
    return ( 
        <>
            <h3>{name}</h3>
            <p>Order ID: #{orderID} {status}</p>
            
        </>
    );
}

export default Package;