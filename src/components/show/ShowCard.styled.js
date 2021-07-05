import styled from "styled-components";
import { SearchCards } from "../styled";

export const StyledShowCards = styled(SearchCards)`
    .btns {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            text-decoration-color: #000;
            color: #000;
            &:hover {
                text-decoration-color: blue;
                color: blue;
            }
            &.dark-theme {
                color: ${({ theme }) => theme.mainColors.gray};
                text-decoration-color: ${({ theme }) => theme.mainColors.gray};
            }
            &.dark-theme:hover {
                color: ${({ theme }) => theme.mainColors.darkthemeblue};
                text-decoration-color: ${({ theme }) =>
                    theme.mainColors.darkthemeblue};
            }
        }
        button {
            outline: none;
            border: 1px solid #8e8e8e;
            border-radius: 15px;
            padding: 5px 20px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                cursor: pointer;
            }
            &.dark-theme {
                background-color: ${({ theme }) => theme.mainColors.darktheme};
                border: 1px solid ${({ theme }) => theme.mainColors.gray};
            }
        }
    }
    p.dark-theme {
        color: ${({ theme }) => theme.mainColors.gray};
    }
`;