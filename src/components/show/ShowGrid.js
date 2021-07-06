/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useCallback, memo} from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled';
import { useShows} from '../../misc/custom-hooks';

const ShowGrid = ({ data, theme }) => {
    const [starredShows, dispatchStarred] = useShows();
    const setTheme = theme ? 'light-theme' : 'dark-theme'
    return (
        <FlexGrid className = {setTheme}>

            {
                data.map(({ show }) => {
                    // console.log(show)
                const isStarred = starredShows.includes(show.id);

                const onStarClick = useCallback(() => {
                    if (isStarred) {
                        dispatchStarred({ type: 'REMOVE', showId: show.id });
                    } else {
                        dispatchStarred({ type: 'ADD', showId: show.id });
                    }
                }, [isStarred, show.id]);
                return (
                    <ShowCard
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                        summary={show.summary}
                        onStarClick={onStarClick}
                        active={isStarred ? 'active' : ''}
                        theme = {setTheme}
                    />
                );
            })}
        </FlexGrid>
    );
};

export default memo(ShowGrid);
