import { useState } from "react";
import { useEffect } from "react";

import data from "../data";

function Today() {
    const [message, setMessage] = useState('');
    const [birtdayQty, setBirthdayQty] = useState(data);

    useEffect(() => {
    
    setMessage( birtdayQty.length + ' birthdays today');
    }, []);

    return(
        <div>
            <h2>{message}</h2>
        </div>
    )

}

export default Today;