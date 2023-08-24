import { useReducer, useState, useEffect } from "react";

const FetchType = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
}

const defaultState = {
    loading: false,
    error: false,
    success: false,
    response: null,
}

const fetchReducer = (state, action) => {
    switch (action.type) {
        case FetchType.FETCH_START:
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
            }
        case FetchType.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                response: action.payload,
            }
        case FetchType.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                success: false,
            }
        default:
            return state
    }
}

const useFetchV2 = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, defaultState)
    const [nthFetch, setNthFetch] = useState(0)

    useEffect(() => {
        dispatch({ type: FetchType.FETCH_START })
        fetch(url)
            .then(response => dispatch({ type: FetchType.FETCH_SUCCESS, payload: response }))
            .catch(error => dispatch({ type: FetchType.FETCH_ERROR }))
    }, [url, nthFetch])

    return [state, () => setNthFetch(nthFetch + 1)]
}

export default useFetchV2