import React from 'react'
import { useReducer, useRef } from 'react'
import { INITIAL_STATE, formReducer } from '../formReducer'

export default function ComplexForm() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)
  const tagRef = useRef()

  console.log(state)

  const handleChange = (e) => {
    dispatch({type: "CHANGE_INPUT", payload: e.target})
  }

  const handleTags = () => {
    const tags = tagRef.current.value.split(",")
    tags.forEach(tag => {
      dispatch({type: "ADD_TAG", payload: tag})
    })
  }

  return (
    <div className='complex-form'>
      <h1>Complex form here</h1>
      <form>
        <input 
          type="text"
          name="title"
          placeholder='Title'
          onChange={handleChange}
        />
        <input 
          type="text"
          name="desc"
          placeholder='Desc'
          onChange={handleChange}
        />
        <input 
          type="number"
          name="price"
          placeholder='Price'
          onChange={handleChange}
        />
        <p>Category:</p>
        <select 
          name="category"
          onChange={handleChange}
        >
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
        </select>

        <div className="tags">
          <p>Tags:</p>
          <textarea 
            placeholder='Separate tags with commas...'
            ref={tagRef}
          >
          </textarea>
          <button 
            type='button'
            onClick={handleTags}
          >
            Add tags
          </button>
          {state.tags.map((tag) => (
            <span 
              key={tag}
              onClick={() => dispatch({type: "REMOVE_TAG", payload: tag})}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="quantity">
          <button 
            type="button"
            onClick={() => dispatch({type: "DECREASE"})}
          >
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button 
            type="button"
            onClick={() => dispatch({type: "INCREASE"})}
          >
            +
          </button>
        </div>
      </form>
    </div>
  )
}
