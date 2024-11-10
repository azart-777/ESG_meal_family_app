import React from 'react';
import './WeDidItContent.scss';

interface WeDidItProps {
    slogan: string;
    message: string;
    shortDescription: string;
    cardData: {
        title: string;
        sentences: string[];
    }[];
}

const WeDidItContent: React.FC<WeDidItProps> = ({ slogan, message, cardData }) => {
    return (
        <div className='we-did-it-content'>
            <div className='we-did-it-content__body'>
                <div className='we-did-it-content__slogan-container'>
                    <h2 className='we-did-it-content__slogan'>{slogan}</h2>
                </div>
                <div className='we-did-it-content__message-container mt-sm mb-md'>
                    <p className='we-did-it-content__message'>{message}</p>
                </div>
            </div>
            <div className='we-did-it-content__card-list-wrapper'>
                {cardData.map((card, index) => (
                    <div className='we-did-it-content__card-list' key={index}>
                        <div className='achievement-card'>
                            <div className='achievement-card__header'>
                                <h3 className='achievement-card__title'>{card.title}</h3>
                            </div>
                            <div className='achievement-card__body'>
                                <ul className='achievement-card__list'>
                                    {card.sentences.map((sentence, idx) => (
                                        <li key={idx} className='achievement-card__item'>{sentence}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeDidItContent;