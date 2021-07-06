/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Cast from '../components/show/Cast';
import Seasons from '../components/show/Seasons';
import { ShowPageWrapper, InfoBlock } from './Show.styled';
import { useShow } from '../misc/custom-hooks';
import '../index.css'

const Show = ({theme}) => {
    const { id } = useParams();

    const { show, isLoading, error } = useShow(id);
    const setTheme = theme ? 'light' : 'dark-theme'

    if (isLoading) {
        return <div className={`loader ${setTheme}`
    }>Data is being loaded</div>;
    }

    if (error) {
        return <div className={`loader ${setTheme}`
    }>Error occured : {error}</div>;
    }
    return (
        <ShowPageWrapper className={setTheme}>
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                tags={show.genres}
                theme={setTheme}
                className={setTheme}
            />
            <InfoBlock>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                    theme={setTheme}
                />
            </InfoBlock>
            <div className = "seasons-div">
                <h2>Seasons</h2>
                <Seasons seasons={show._embedded.seasons} theme={setTheme} />
            </div>
            <div className = "cast-div">
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast} theme={setTheme} />
            </div>
        </ShowPageWrapper>
    );
};

export default Show;
