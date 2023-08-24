import { useReducer, useEffect, useRef } from 'react'

const FetchType = {
    FETCH_START: 'FETCH_START',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR'
}

const defaultState = {
    loading: false,
    error: false,
    success: false,
    nthFetch: 0,
    data: null
}

const fetchReducer = (state , action) => {
    switch(action.type){
        case FetchType.FETCH_START:
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
                nthFetch: state.nthFetch + 1
            }
        case FetchType.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                data: action.payload
            }
        case FetchType.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                success: false,
                data: null
            }
        default:
            return state
    }
}

// the responseConversion function is used to convert the response to the desired format
// for example `response => response.json()` or `response => response.blob()`
const useFetchOnClick = (responseConversion) => {
    const [state, dispatch] = useReducer(fetchReducer, defaultState)
    const abortRef = useRef();

    const fetchOnClick = (url, options) => {
        if (abortRef.current) {
            abortRef.current.abort()
        }

        abortRef.current = new AbortController()
        const signal = abortRef.current.signal

        dispatch({ type: FetchType.FETCH_START })
        fetch(url, { ...options, signal })
            .then(responseConversion)
            .then(data => dispatch({ type: FetchType.FETCH_SUCCESS, payload: data }))
            .catch(error => {
                dispatch({ type: FetchType.FETCH_ERROR })
                console.log(error)
            })
    }

    useEffect(() => {
        return () => {
            if (abortRef.current) {
                abortRef.current.abort()
            }
        }
    }, [])

    return [state, fetchOnClick]
}

export default useFetchOnClick

