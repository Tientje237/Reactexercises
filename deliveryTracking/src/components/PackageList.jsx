import { useState } from 'react';
import Package from './Package'
const Packagelist = () => {

    const [delivery, setDelivery] = useState([
        {
            name : "Package from Rotterdam",
            orderID : "14389-91751",
            status : "onderweg"
        },
        {
            name : "Package from Amsterdam",
            orderID : "14389-34134",
            status : "ontvangen"
        },
        {
            name : "Package from Eindhoven",
            orderID : "14389-56723",
            status : "ontvangen"
        },
        {
            name : "Package from Barcelona",
            orderID : "14389-74687",
            status : "ontvangen"
        },
        {
            name : "Package from Paris",
            orderID : "14389-23466",
            status : "ontvangen"
        },
        {
            name : "Package from Toronto",
            orderID : "14389-95678",
            status : "ontvangen"
        },
        {
            name : "Package from Berlin",
            orderID : "14389-24579",
            status : "ontvangen"
        },
        {
            name : "Package from Vienna",
            orderID : "14389-24578",
            status : "ontvangen"
        }
    ]);
    
    return (  
        <div>

            {delivery.map((delivery, index) => (
                <Package
                    key={index}
                    name={delivery.name}
                    orderID={delivery.orderID}
                    status={delivery.status}
                />
            ))}
        </div>
    );
}

export default Packagelist;