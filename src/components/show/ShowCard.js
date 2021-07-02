import React from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCards } from './ShowCard.styled';

const ShowCard = ({ id, name, image, summary }) => {
    const summaryAsText = summary
        ? `${summary
              .split(' ')
              .slice(0, 10)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No Description';
    
    return <StyledShowCards>
        <div className="img-wrapper">
            <img src={image} alt="show" className = "img"/>
        </div>
        <h1>{name}</h1>
        <p>{summaryAsText}</p>
        <div className = "btns">
            <Link to={`/show/${id}`}>Read more</Link>
            <button type = "button">Star me</button>
        </div>
    </StyledShowCards>;
};

export default ShowCard;
