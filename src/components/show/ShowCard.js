import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { StyledShowCards } from './ShowCard.styled';
import { Star } from '../styled';

const ShowCard = ({ id, name, image, summary, onStarClick, active, theme }) => {
    const summaryAsText = summary
        ? `${summary
              .split(' ')
              .slice(0, 10)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No Description';
    return (
        <StyledShowCards>
            <div className="img-wrapper">
                <img src={image} alt="show" className="img" />
            </div>
            <h1>{name}</h1>
            <p className={theme}>{summaryAsText}</p>
            <div className={`btns ${theme}`}>
                <Link to={`/show/${id}`} className={theme}>
                    Read more
                </Link>
                <button type="button" onClick={onStarClick} className={theme}>
                    <Star active={active} />
                </button>
            </div>
        </StyledShowCards>
    );
};

export default memo(ShowCard);
