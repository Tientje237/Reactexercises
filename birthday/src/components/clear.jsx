import React, { useState, useEffect } from "react";

const Clear = () => {
    const [clearText, setClearText] = useState('');

    useEffect(() => {
        setClearText('Clear All');
    }, []);

    return(
        <footer>{ clearText }</footer>
    );
}

export default Clear;