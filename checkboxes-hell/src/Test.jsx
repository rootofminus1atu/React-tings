import { useState } from 'react'
import CheckboxList from './CheckBoxList'

// some static data
// I might make it more dynamic later, for example changing the core setting, disabling chapters, etc.
const contents = [
  {
    title: 'LINEAR',
    chapters: [
      {
        id: 'L.1',
        core: true,
        // we add in 2 checkboxes here because core is true (see initialState)
      },
      {
        id: 'L.2',
        core: false,
        // we add only 1 checkbox here because core is false
      },
    ]
  },
  {
    title: 'MATRIX',
    chapters: [
      {
        id: 'M.1',
        core: true,
        // we add in 2 checkboxes here because core is true
      },
    ]
  }
]

function App() {

  // using this to both copy the static presets from above
  // and to attach the reactive checkbox true/false values
  // later I could use localstorage to persist the reactive elements
  const initialState = contents.map((content) => ({
    ...content,
    chapters: content.chapters.map((chapter) => ({
      ...chapter,
      checkbox1: false,
      ...(chapter.core && { checkbox2: false }),
    })),
  }));

  const [state, setState] = useState(initialState);
  console.log(state)

  const updateCheckbox = (onOff, chapterId, whichCheckbox) => {

    // complicated state re-creation, that's why I'm asking for a better way to manage it
    const updatedState = state.map((content) => ({
      ...content,
      chapters: content.chapters.map((chapter) => {
        if (chapter.id === chapterId) {
          if (whichCheckbox === 1) {
            return {
              ...chapter,
              checkbox1: onOff,
            };
          } else if (whichCheckbox === 2) {
            return {
              ...chapter,
              checkbox2: onOff,
            }
          } 
        }
        return chapter
      }),
    }));

    setState(updatedState);
  } 

  // convenience methods, to prevent typos
  const updateCheckbox1 = (onOff, chapterId) => {
    updateCheckbox(onOff, chapterId, 1)
  }

  const updateCheckbox2 = (onOff, chapterId) => {
    updateCheckbox(onOff, chapterId, 2)
  }

  // again a complicated calculation, because of how my state is stored and structured
  const amountTicked = state.reduce((total, content) => (
    total +
    content.chapters.reduce((chapterTotal, chapter) => (
      chapterTotal + (chapter.checkbox1 ? 1 : 0) + (chapter.checkbox2 ? 1 : 0)
    ), 0)
  ), 0)

  return (
    <>
      <h1>hi</h1>
      <CheckboxList 
        state={state}
        updateCheckbox1={updateCheckbox1}
        updateCheckbox2={updateCheckbox2}
      />
      <p>Amount of ticked checkboxes: {amountTicked}</p>
    </>
  )
}

export default App
