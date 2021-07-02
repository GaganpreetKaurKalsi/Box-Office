import React from 'react'

const ActorCard = ({ name, country, birthday, deathday, gender,image}) => {
    return (
        <div>
            <div className="actor-image">
                <img src={image} alt="actor" />
            </div>
            <h1>{name} {gender ? `${gender}` : null}</h1>
            <p>{country ? `Comes from ${country}` : 'No country known'}</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p>{deathday?`Died ${deathday}`:"Alive"}</p>
        </div>
    );
};

export default ActorCard
