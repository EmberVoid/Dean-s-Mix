import React from 'react';
import Card from './Card'

const CardList = ({ bands }) => {
    return (
        <div>
            {bands.map((name, ID) => {
                return (<Card
                    key={ID}
                    name={bands[ID].name}
                    year={bands[ID].year}
                    country={bands[ID].country}
                    logo={bands[ID].logo}
                />)
            })};
        </div>
    );
};

export default CardList;