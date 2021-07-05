import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';

export const FlexGrid = styled(FadeIn)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &.dark-theme {
        background-color: ${({ theme }) => theme.mainColors.darktheme};
    }
`;

export const SearchCards = styled.div`
    width: 300px;
    height: 100%;
    margin: 0px 15px 40px;
    .img-wrapper {
        width: 98%;
        border-radius: 40px;
        height: 400px;
        overflow: hidden;
        border: 1px solid #ddd;
    }
    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h1 {
        margin: 10px 0;
        font-size: 21px;
    }

    p {
        margin: 0;
    }
`;

export const Star = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: #ffc806;
    background-color: ${props => props.active === 'active' ? '#ffc806' : '#b0b0b0'};
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
`;
