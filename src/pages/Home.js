import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('show');
    const isShowsChecked = searchOption === 'show';

    const onInputChange = e => {
        setInput(e.target.value);
    };
    const onSearch = () => {
        if (searchOption === 'show') {
            apiGet(`/search/shows?q=${input}`).then(res => {
                setResults(res, 'show');
            });
        } else {
            apiGet(`/search/people?q=${input}`).then(res => {
                setResults(res, 'people');
            });
        }
    };
    const onKeyDown = e => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };
    const onRadioChange = e => {
        // setResults(null)
        if (e.target.value === 'show' && isShowsChecked === false) {
            setSearchOption('show');
        } else if (e.target.value === 'people' && isShowsChecked === true) {
            setSearchOption('people');
        }
    };
    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results found</div>;
        }
        if (results && results.length > 0) {
            console.log(results);
            return results[0].show ? <ShowGrid data={results} /> : <ActorGrid data={results}/>;
        }
        return null;
    };
    return (
        <div>
            <MainPageLayout>
                <input
                    type="text"
                    onChange={onInputChange}
                    onKeyDown={onKeyDown}
                    value={input}
                    placeholder="Say something"
                />
                <div>
                    <label htmlFor="search-show">
                        Show
                        <input
                            type="radio"
                            name="search-show"
                            id="search-show"
                            value="show"
                            checked={isShowsChecked}
                            onChange={onRadioChange}
                        />
                    </label>
                    <label htmlFor="search-actor">
                        Actor
                        <input
                            type="radio"
                            name="search-actor"
                            id="search-actor"
                            value="people"
                            checked={!isShowsChecked}
                            onChange={onRadioChange}
                        />
                    </label>
                </div>
                <button type="button" onClick={onSearch}>
                    Search
                </button>
                {renderResults()}
            </MainPageLayout>
        </div>
    );
};

export default Home;
