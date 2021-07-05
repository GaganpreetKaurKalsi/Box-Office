import styled from 'styled-components';
import { SearchCards } from '../styled';

export const StyledActorCard = styled(SearchCards)`
    .deathday {
        margin: 0;
        margin-top: 15px;
        font-weight: bold;
    }
    .info.dark-theme {
        color: ${({ theme }) => theme.mainColors.gray};
    }
`;
