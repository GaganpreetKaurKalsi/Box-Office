import React from 'react'
import { DetailsWrapper } from './Details.styled';

const Details = ({ status, premiered, network, theme }) => {
    return (
        <DetailsWrapper>
            <p className={theme}>
                Status: <span>{status}</span>
            </p>
            <p className={theme}>
                Premiered {premiered} {network ? `on ${network.name}` : null}
            </p>
        </DetailsWrapper>
    );
};

export default Details
