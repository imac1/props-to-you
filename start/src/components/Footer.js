import React, { useState } from 'react';

export default function Footer() {

    const [isHidden, setIsHidden] = useState(false);


    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }


    const [currentDate, setCurrentDate] = useState(getDate());


    const handleClick = () => {
        setIsHidden(true); 
        setTimeout(() => {
            setIsHidden(false); 
        }, 2000);
    };

    return (
       
            <div className={`footer ${isHidden ? 'footer__hidden' : ''}`} onClick={handleClick}>
                <h1>Footer</h1>
                <p>{currentDate}</p>
            </div>
        )
    
}
