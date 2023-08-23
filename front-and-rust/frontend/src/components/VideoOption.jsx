import React from 'react'
import { useState, useRef, useReducer } from 'react'

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

  const downloadVid = async () => {

    // make post request with the option
    try {
      dispatch({ type: FetchType.FETCH_START })

      const res = await fetch('/api/download-stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
      })

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)

      const a = document.createElement('a');
      a.href = url;
      a.download = 'video.mp4';
      a.textContent = 'Download Video THIS IS CORRECT';
      
      document.body.appendChild(a);

      dispatch({ type: FetchType.FETCH_SUCCESS, payload: url })

    } catch (error) {
      console.error(error)
      dispatch({ type: FetchType.FETCH_ERROR })
    }
  }

  return (
    <div>
      <button
        onClick={downloadVid}
      >
        <h2>{option.quality_label}</h2>
        <p>Download</p>
      </button>
      {
        state.loading && <p>Loading...</p>
      }
      {
        state.error && <p>Error</p>
      }
      {
        state.success && (<>
        <p>Success, download video below</p>
        <a href={state.url} download={`${state.url}.mp4`}>Download</a>
        </>)
      }
    </div>
  )
}
