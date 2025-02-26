import React from 'react';

const Block = ({ title, buttonText }) => {
    return (
        <div className="block">
            <h2 className= "text-block">{title}</h2>
            <button className="button-block">{buttonText}</button>
        </div>
    );
};

export default Block;
