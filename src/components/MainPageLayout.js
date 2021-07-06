import React from 'react'
import Nav from './Nav'
import Title from './Title'
import Theme from './Theme'


const MainPageLayout = ({ theme, toggle, children }) => {

    return (
        <div className={!theme ? 'dark-theme' : 'light'} style={{ height: window.innerHeight }}>
            <Theme onClick={toggle} theme={theme} />
            <Title
                title="Box Office"
                subtitle="Are you looking for a movie or an actor"
                theme={!theme ? 'dark-theme' : 'light'}
            />
            <Nav theme={theme}/>
            {children}
        </div>
    );
}

export default MainPageLayout
