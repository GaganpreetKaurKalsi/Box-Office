import React, { useState, useCallback} from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
import { useLastQuery} from '../misc/custom-hooks';
import { SearchInput, RadioInputsWrapper, SearchButtonWrapper } from './Home.styled';
import CustomRadio from '../components/CustomRadio';

const renderResults = (results, theme) => {

    if (results && results.length === 0) {
        return <div className="loader">No results found</div>;
    }
    if (results && results.length > 0) {
        return results[0].show ? (
            <ShowGrid theme={theme} data={results} />
        ) : (
            <ActorGrid theme={theme} data={results} />
        );
    }
    return null;
};

const Home = ({ theme, toggle }) => {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('show');
    const isShowsChecked = searchOption === 'show';
    const onInputChange = useCallback(e => {
        setInput(e.target.value);
    }, [setInput]);
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
    const onRadioChange =useCallback( e => {
        setSearchOption(e.target.value);
    }, []);
    
    return (
        <div className="background-image">
            <MainPageLayout theme={theme} toggle={toggle}>
                <SearchInput
                    type="text"
                    onChange={onInputChange}
                    onKeyDown={onKeyDown}
                    value={input}
                    placeholder="Say something"
                />
                <RadioInputsWrapper>
                    <CustomRadio
                        label="Shows"
                        id="search-show"
                        value="show"
                        checked={isShowsChecked}
                        onChange={onRadioChange}
                        theme={theme}
                    />
                    <CustomRadio
                        label="Actors"
                        id="search-actor"
                        value="people"
                        checked={!isShowsChecked}
                        onChange={onRadioChange}
                        theme={theme}
                    />
                </RadioInputsWrapper>
                <SearchButtonWrapper>
                    <button
                        type="button"
                        onClick={onSearch}
                        className={theme ? 'light' : 'dark-theme'}
                    >
                        Search
                    </button>
                </SearchButtonWrapper>

                {renderResults(results, theme)}
            </MainPageLayout>
        </div>
    );
};

export default Home;
