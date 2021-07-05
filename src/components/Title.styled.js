import styled from "styled-components";

export const TitleWrapper = styled.div`
    text-align: center;
    margin: 40px 0;

    h1 {
        color: ${({ theme }) => theme.mainColors.blue};
        letter-spacing: 10px;
        text-transform: uppercase;
        margin: 0 0 10px;
    }

    p {
        color: ${({ theme }) => theme.mainColors.dark};
        margin: 0;
        font-weight: 500;
    }

    h1.dark-theme {
        color: ${({ theme }) => theme.mainColors.darkthemeblue};
    }
    p.dark-theme {
        color: ${({ theme }) => theme.mainColors.lightgray};
    }
`;
