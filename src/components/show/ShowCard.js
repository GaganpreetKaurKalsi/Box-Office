import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ id, name, image, summary }) => {
    const summaryAsText = summary
        ? `${summary
              .split(' ')
              .slice(0, 10)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No Description';
    
    return <div>
        <div className="show-image">
            <img src={image} alt="show" />
        </div>
        <h1>{name}</h1>
        <p>{summaryAsText}</p>
        <div>
            <Link to={`/show/${id}`}>Read more</Link>
            <button type = "button">Star me</button>
        </div>
    </div>;
};

export default ShowCard;
