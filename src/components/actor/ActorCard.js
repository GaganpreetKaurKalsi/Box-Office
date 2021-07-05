import React from 'react'
// import { SearchCards } from '../styled';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ name, country, birthday, deathday, gender,image, theme}) => {
    return (
        <StyledActorCard>
            <div className="img-wrapper">
                <img src={image} alt="actor" className = "img" />
            </div>
            <h1>{name} {gender ? `${gender}` : null}</h1>
            <p className = {theme}>{country ? `Comes from ${country}` : 'No country known'}</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p className = "deathday">{deathday?`Died ${deathday}`:"Alive"}</p>
        </StyledActorCard>
    );
};

export default ActorCard
