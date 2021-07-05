import React from 'react'
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../styled';

const ActorGrid = ({ data, theme }) => {
    const setTheme = theme ? 'light-theme' : 'dark-theme';
    return (
        <FlexGrid className={setTheme}>
            {data.map(({ person }) => (
                <ActorCard
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    country={person.country ? person.country.name : null}
                    birthday={person.birthday}
                    deathday={person.deathday}
                    gender={person.gender}
                    image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
                    theme={theme ? 'light' : 'dark-theme'}
                />
            ))}
        </FlexGrid>
    );
}

export default ActorGrid
