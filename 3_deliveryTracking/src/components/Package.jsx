const Package = ({name, orderID, status}) => {
    return ( 
        
        <>
            <div className="layoutc">
            <h3>{name}</h3>
            <p>Order ID: #{orderID} {status}</p>
            </div>
        </>
    );
}

export default Package;