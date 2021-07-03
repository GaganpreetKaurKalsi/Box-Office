/* eslint-disable array-callback-return */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';
import MainPageLayout from '../components/MainPageLayout'
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
    const [starred] = useShows()
    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("HIII")
        if (starred && starred.length > 0) {
            const promises = starred.map(id => apiGet(`/shows/${id}`));
            Promise.all(promises)
                .then(apiData => apiData.map(show => ({ show })))
                .then(result => {
                    setShows(result)
                    setIsLoading(false)
                }).catch(err => {
                    setError(err.message)
                    setIsLoading(false)
                });

        }
        else {
            setIsLoading(false)
        }
        
    }, [starred])
    return (
        <div>
            <MainPageLayout>
                {isLoading && <div>Shows are still loading</div>}
                {error && <div>Error occured : {error}</div>}
                {!isLoading && !shows && <div>No shows are starred</div>}
                {!isLoading && shows && !error && <ShowGrid data={shows} />}
            </MainPageLayout>
        </div>
    );
};

export default Starred;
