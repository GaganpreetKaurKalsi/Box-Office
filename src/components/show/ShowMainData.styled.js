import styled from 'styled-components';

export const MainDataWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
    padding-top: 70px;

    img {
        min-width: 250px;
        width: 300px;
        max-height: 450px;
        border: 1px solid #ddd;
        border-radius: 40px;
    }

    .text-side {
        margin-left: 20px;
        .summary {
            color: #5f5f5f;
            line-height: 1.5;
            &.dark-theme {
                color: ${({ theme }) => theme.mainColors.gray};
            }
        }
    }

    .back-btn {
        height: 30px;
        width: 80px;
        border-radius: 20px;
        outline: none;
        border: 1px solid ${({ theme }) => theme.mainColors.blue};
        background-color: white;
        position: absolute;
        right: 20px;
        top: 20px;
        a {
            text-decoration: none;
            color: ${({ theme }) => theme.mainColors.blue};
        }
        &:hover {
            border: 1px solid ${({ theme }) => theme.mainColors.blue};
            background-color: ${({ theme }) => theme.mainColors.blue};
            a {
                color: ${({ theme }) => theme.mainColors.white};
            }
        }
        &.dark-theme {
            border: 1px solid ${({ theme }) => theme.mainColors.white};
            background-color: ${({ theme }) => theme.mainColors.darktheme};
            a {
                color: ${({ theme }) => theme.mainColors.white};
            }
            &:hover {
                border: 1px solid ${({ theme }) => theme.mainColors.white};
                background-color: ${({ theme }) => theme.mainColors.white};
                a {
                    color: ${({ theme }) => theme.mainColors.darkthemeblue};
                }
            }
        }
    }

    /* 20310 */
    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        img {
            margin-bottom: 20px;
            margin: auto;
        }
        .text-side {
            margin-left: 0;
            margin-top: 20px;
        }
    }
`;

export const Headline = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h1 {
        margin: 0;
        border-right: 1px solid #ddd;
        padding-right: 25px;
        margin-right: 20px;
    }

    div {
        display: flex;
        align-items: center;
        span {
            margin-left: 10px;
        }
    }
`;

export const TagList = styled.div`
    display: inline-flex;
    flex-wrap: wrap;

    span {
        margin: 6px;
        margin-bottom: 0;
        color: blue;
        background-color: #d0c9ff;
        padding: 3px 13px;
        border-radius: 20px;
        font-size: 14px;
    }
`;
