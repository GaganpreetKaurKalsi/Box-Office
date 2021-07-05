import React from 'react';
import { Link } from 'react-router-dom';
import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Star } from '../styled';
import { MainDataWrapper, Headline, TagList } from './ShowMainData.styled';


const ShowMainData = ({ name, rating, summary, tags, image, className }) => {
    return (
        <MainDataWrapper className={className}>
            <button type="button" className={`back-btn ${className}`}>
                <Link to='/'>Back</Link>
            </button>
            <img
                src={image ? image.original : IMG_PLACEHOLDER}
                alt="show-cover"
            />
            <div className="text-side">
                <Headline>
                    <h1>{name}</h1>
                    <div>
                        <Star active="active" />
                        <span>{rating.average || 'N/A'}</span>
                    </div>
                </Headline>
                <div
                    dangerouslySetInnerHTML={{ __html: summary }}
                    className={`summary ${className}`}
                />

                <TagList>
                    Tags :{' '}
                    <div>
                        {tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                </TagList>
            </div>
        </MainDataWrapper>
    );
};

export default ShowMainData;
