import React from 'react'
import { useState, useRef, useReducer } from 'react'
import LoadingSpinner from './LoadingSpinner'

const FetchType = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
}

const INITIAL_STATE = {
  done: false,
  loading: false,
  success: false,
  error: false,
  url: ""
}

const fetchReducer = (state, action) => {
  switch (action.type) {
    case FetchType.FETCH_START:
      return {
        done: false,
        loading: true,
        success: false,
        error: false,
        url: ""
      }
    case FetchType.FETCH_SUCCESS:
      return {
        done: true,
        loading: false,
        success: true,
        error: false,
        url: action.payload
      }
    case FetchType.FETCH_ERROR:
      return {
        done: true,
        loading: false,
        success: false,
        error: true,
        url: ""
      }
    default:
      return state
  }
}



export const VideoOption = ({ option }) => {
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE)
  const anchorRef = useRef(null)

  const downloadVid = async () => {
    try {
      dispatch({ type: FetchType.FETCH_START })

      const response = await fetch('/api/download-stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
      })

      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`)
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      dispatch({ type: FetchType.FETCH_SUCCESS, payload: url })

    } catch (error) {
      console.error(error)
      dispatch({ type: FetchType.FETCH_ERROR })
    }
  }

  const handleButtonClick = () => {
    if (!state.done) {
      downloadVid()
    } else if (state.success) {
      anchorRef.current.click()
    }
  }

  return (
    <div>
      <button onClick={handleButtonClick}>
        { state.loading ? (
          <LoadingSpinner />
        ) : state.error ? (
          <p>Error {"("}sorry idk why{")"}</p>
        ) : state.done ? (
          <p>Success, download now!</p>
        ) : (
          <>
            <h2>{option.quality_label}</h2>
            <p>Download</p>
          </>
        )}
      </button>
      {state.done && state.success && (
        <a ref={anchorRef} href={state.url} download={`${state.url}.mp4`} style={{ display: 'none' }}></a>
      )}
    </div>
  )
}
