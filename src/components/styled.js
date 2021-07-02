import styled from "styled-components";

export const FlexGrid = styled.div`
display : flex;
justify-content : center;
flex-wrap: wrap;
`;

export const SearchCards = styled.div`
    width: 300px;
    height: 100%;
    margin: 0px 15px 40px;
    .img-wrapper {
        width: 100%;
        border-radius: 40px;
        height: 420px;
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