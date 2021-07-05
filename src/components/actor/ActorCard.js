import React from 'react'
// import { SearchCards } from '../styled';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ name, country, birthday, deathday, gender,image, theme}) => {
    return (
        <StyledActorCard>
            <div className="img-wrapper">
                <img src={image} alt="actor" className="img" />
            </div>
            <h1 className={theme}>
                {name} {gender ? `${gender}` : null}
            </h1>
            <p className={`info ${theme}`}>
                {country ? `Comes from ${country}` : 'No country known'}
            </p>
            {birthday ? (
                <p className={`info ${theme}`}>Born {birthday}</p>
            ) : null}
            <p className={`deathday ${theme}`}>
                {deathday ? `Died ${deathday}` : 'Alive'}
            </p>
        </StyledActorCard>
    );
};

export default ActorCard
