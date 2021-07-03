/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Cast from '../components/show/Cast';
import Seasons from '../components/show/Seasons';
import { ShowPageWrapper, InfoBlock } from './Show.styled';

const initialState = {
    show: null,
    isLoading: true,
    error: null,
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { show: action.show, isLoading: false, error: null };
        case 'FETCH_FAILED':
            return { show: null, isLoading: false, error: action.error };
        default:
            return prevState;
    }
};

const Show = () => {
    const { id } = useParams();
    const [{ show, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    );
    console.log(show);

    useEffect(() => {
        let isMounted = true;
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(res => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_SUCCESS', show: res });
                }
            })
            .catch(err => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_FAILED', error: err.message });
                }
            });
        return () => {
            isMounted = false;
        };
    }, [id]);

    if (isLoading) {
        return <div>Data is being loaded</div>;
    }

    if (error) {
        return <div>Error occured : {error}</div>;
    }
    return (
        <ShowPageWrapper>
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                tags={show.genres}
            />
            <InfoBlock>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                />
            </InfoBlock>
            <div>
                <h2>Seasons</h2>
                <Seasons seasons={show._embedded.seasons} />
            </div>
            <div>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast} />
            </div>
        </ShowPageWrapper>
    );
};

export default Show;
