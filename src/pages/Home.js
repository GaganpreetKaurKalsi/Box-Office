import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
    const [input, setInput] = useState('');

    const onInputChange = e => {
        setInput(e.target.value);
    };
    const onSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(res => res.json()).then((result) => { console.log(result) })
    };
    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch()
        }
    }
    return (
        <div>
            <MainPageLayout>
                <input type="text" onChange={onInputChange} onKeyDown={onKeyDown}value={input} />
                <button type="button" onClick={onSearch} >
                    Search
                </button>
            </MainPageLayout>
        </div>
    );
};

export default Home;
