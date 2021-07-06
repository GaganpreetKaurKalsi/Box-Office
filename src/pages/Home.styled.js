import styled from "styled-components";

export const SearchInput = styled.input`
    display: block;
    font-family: 'Roboto', sans-serif;
    width: 200px;
    margin: auto;
    outline: none;
    padding: 13px 15px;
    border: 1px solid #dbdbdb;
    box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
    font-size: 14px;
    border-radius: 12px;
    color: #8d8d8d;

    &::placeholder {
        font-weight: 300;
        color: #8d8d8d;
    }
`;

export const RadioInputsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    div {
        margin: 0 15px;
    }
`;

export const SearchButtonWrapper = styled.div`
    text-align: center;
    margin-bottom: 60px;
    margin-top: 30px;

    button {
        color: ${({ theme }) => theme.mainColors.blue};
        background-color: ${({ theme }) => theme.mainColors.white};
        margin: auto;
        padding: 10px 50px;
        font-size: 15px;
        border: none;
        outline: none;
        border-radius: 12px;
        border: 1px solid ${({ theme }) => theme.mainColors.blue};
        &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.mainColors.blue};
            color: #fff;
        }
        &.dark-theme {
            color: ${({ theme }) => theme.mainColors.darkthemeblue};
            border: 1px solid ${({ theme }) => theme.mainColors.darkthemeblue};
            background-color: ${({ theme }) => theme.mainColors.darktheme};
        }
        &.dark-theme:hover {
            background-color: white;
        }
    }
`;
