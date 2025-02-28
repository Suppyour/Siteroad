import React from 'react';
import { Link } from 'react-router-dom';

const Block = ({ title, buttonText, backgroundImage, linkTo }) => {
    const blockStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="block" style={blockStyle}>
            <h2 className="text-block">{title}</h2>
            <Link to={linkTo}>
                <button className="button-block">{buttonText}</button>
            </Link>
        </div>
    );
};

export default Block;
