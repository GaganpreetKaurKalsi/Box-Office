import React, {memo} from 'react'
import styled from 'styled-components';

const RadioWrapper = styled.label`
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    font-size: 13px;
    user-select: none;
    font-weight: 700;
    line-height: 1.65;
    margin: 0 15px;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    span {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: #fff;
        border: 2px solid ${({ theme }) => theme.mainColors.blue};
        border-radius: 50%;
        &.dark-theme {
            /* border: 2px solid ${({ theme }) =>
                theme.mainColors.darkthemeblue}; */
            border: 2px solid ${({ theme }) => theme.mainColors.lightgray};
        }
    }

    input:checked ~ span {
        background-color: #fff;
        border: 2px solid ${({ theme }) => theme.mainColors.blue};
    }
    input.dark-theme:checked ~ span {
        border: 2px solid ${({ theme }) => theme.mainColors.lightgray};
    }

    span:after {
        content: '';
        position: absolute;
        display: none;
    }

    input:checked ~ span:after {
        display: block;
    }

    span:after {
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme.mainColors.blue};
    }
    span.dark-theme:after {
        background: ${({ theme }) => theme.mainColors.darkthemeblue};
    }
`;

const CustomRadio = ({ theme, label, ...restProps }) => {

    const setTheme = theme ? 'light':'dark-theme'
    return (
        <RadioWrapper htmlFor={restProps.id}>
            {label}
            <input {...restProps} type="radio" className={setTheme} />
            <span className={setTheme} />
        </RadioWrapper>
    );
}

export default memo(CustomRadio)
