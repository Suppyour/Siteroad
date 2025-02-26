import React from 'react';

const Block = ({ title, buttonText, backgroundImage }) => {
    const blockStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="block" style = {blockStyle}>
            <h2 className= "text-block">{title}</h2>
            <button className="button-block">{buttonText}</button>
        </div>
    );
};

export default Block;
