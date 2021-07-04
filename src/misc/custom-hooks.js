import { useReducer, useEffect, useState } from 'react';
import { apiGet } from './config';

function showsReducer(prevState, action) {
    switch (action.type) {
        case 'ADD':
            return [...prevState, action.showId];
        case 'REMOVE':
            return prevState.filter(showId => showId !== action.showId);
        default:
            return prevState;
    }
}

function usePersistedReducer(reducer, initialState, key) {
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        console.log(initial);
        const persisted = localStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : initial;
    });

    useEffect(() => {
        console.log(key, JSON.stringify(state));
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, dispatch];
}

export function useShows(key = 'shows') {
    return usePersistedReducer(showsReducer, [], key);
}

export function useLastQuery(key = 'lastQuery') {
    const [input, setInput] = useState(() => {
        const persisted = sessionStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : '';
    });

    const setPersistedInput = newState => {
        setInput(newState);
        sessionStorage.setItem(key, JSON.stringify(newState));
    };

    return [input, setPersistedInput];
}

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { show: action.show, isLoading: false, error: null };
        case 'FETCH_FAILED':
            return { show: null, isLoading: false, error: action.error };
        default:
            return prevState;
    }
};

export function useShow(showId) {
    const [state, dispatch] = useReducer(reducer, {
        show: null,
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        let isMounted = true;
        apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
            .then(res => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_SUCCESS', show: res });
                }
            })
            .catch(err => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_FAILED', error: err.message });
                }
            });
        return () => {
            isMounted = false;
        };
    }, [showId]);
    return state;
}
