import styled from 'styled-components';

export const ShowPageWrapper = styled.div`
    padding: 0 20px;

    .seasons-div, .cast-div {
        margin-top: 60px;
    }
    .seasons-div h2, .cast-div h2 {
        margin-bottom: 30px;
    }
    &.dark-theme {
        color: white;
        background-color: ${({ theme }) => theme.mainColors.darktheme};
    }

    @media only screen and (min-width: 516px) {
        padding: 0 40px;
    }

    @media only screen and (min-width: 768px) {
        padding: 0 60px;
    }

    @media only screen and (min-width: 992px) {
        padding: 0 80px;
    }
`;

export const InfoBlock = styled.div`
    margin-top: 60px;
    h2 {
        margin: 0;
        margin-bottom: 30px;
        font-size: 22px;
    }
`;
