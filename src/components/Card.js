import React from 'react';

const Card = ({ logo, name, year, country} ) => {
    return (
        <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img src={logo} alt='band' height={400} width={400}/>
            <div>
                <h2>{name}</h2>
                <p><em>{year}</em></p>
                <p>{country}</p>
            </div>
        </div>
    )
};

export default Card;
