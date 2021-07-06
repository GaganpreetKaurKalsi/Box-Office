import React, {memo} from 'react'
import { TitleWrapper } from './Title.styled'

const Title = ({ title, subtitle, theme }) => {
    return (
        <TitleWrapper>
            <h1 className={theme}>{title}</h1>
            <p className={theme}>{subtitle}</p>
        </TitleWrapper>
    );
}

export default memo(Title)
