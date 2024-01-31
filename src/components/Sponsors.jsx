import React from 'react';
import sponsorPaperzImage from '../assets/paperz.svg';
import sponsorDorfuzImage from '../assets/dorfus.svg';
import sponsorMartinoImage from '../assets/martino.svg';
import sponsorSquareImage from '../assets/square.svg';
import sponsorGobonaImage from '../assets/gobona.svg';

const sponsors = [
    { name: 'Paperz', image: sponsorPaperzImage },
    { name: 'Dorfuz', image: sponsorDorfuzImage },
    { name: 'Martino', image: sponsorMartinoImage },
    { name: 'Square Real Estate Solution', image: sponsorSquareImage },
    { name: 'Gobona', image: sponsorGobonaImage },
];

const SponsorsSection = () => {
    return (
        <section className="sponsors">
            <div className="container">
                <div className="companies">
                    {sponsors.map((sponsor, index) => (
                        <div className={`center-content${index === sponsors.length - 1 ? ' last-company' : ''}`} key={index}>
                            <img src={sponsor.image} alt={`Sponsor ${sponsor.name}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
