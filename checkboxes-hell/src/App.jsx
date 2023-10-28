import { useState } from 'react'
import CheckboxList from './CheckBoxList'
import GradeDisplay from './GradeDisplay';

const contents = [
  {
    title: 'LINEAR',
    chapters: [
      {
        id: 'L.1',
        core: true,
        disabled: false,
        // we add in 2 checkboxes here because core is true
      },
      {
        id: 'L.2',
        core: false,
        disabled: false,
        // we add only 1 checkbox here because core is false
      },
      {
        id: 'L.3',
        core: false,
        disabled: false,
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
        disabled: false,
        // we add in 2 checkboxes here because core is true
      },
      {
        id: 'M.2',
        core: false,
        disabled: true,
      },
      {
        id: 'M.3',
        core: false,
        disabled: false,
      },
      {
        id: 'M.4',
        core: true,
        disabled: false,
      },
      {
        id: 'M.5',
        core: true,
        disabled: false,
      },
    ]
  }
]

function App() {

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

  // TODO: 
  // make copy of state and update instead of using nested maps
  const updateCheckbox = (onOff, chapterId, whichCheckbox) => {

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

  const updateCheckbox1 = (onOff, chapterId) => {
    updateCheckbox(onOff, chapterId, 1)
  }

  const updateCheckbox2 = (onOff, chapterId) => {
    updateCheckbox(onOff, chapterId, 2)
  }

  const checkboxCountReducer = (func) => {
    return state.reduce((total, content) => (
      total + 
      content.chapters.reduce((chapterTotal, chapter) => {
        if (chapter.disabled) return chapterTotal + 0

        return chapterTotal + func(chapter)
      }, 0)
    ), 0)
  }

  const allTotal = checkboxCountReducer((chapter) => (chapter.core ? 2 : 1))
  const allMastered = checkboxCountReducer((chapter) => (chapter.checkbox1 ? 1 : 0) + (chapter.checkbox2 ? 1 : 0))
  const allEmpty = allTotal - allMastered

  const all = {
    total: allTotal,
    mastered: allMastered,
    empty: allEmpty
  }

  const standardTotal = checkboxCountReducer((chapter) => (chapter.core ? 0 : 1))
  const standardMastered = checkboxCountReducer((chapter) => ((!chapter.core && chapter.checkbox1) ? 1 : 0 ))
  const standardEmpty = standardTotal - standardMastered

  const standard = {
    total: standardTotal,
    mastered: standardMastered,
    empty: standardEmpty
  }

  const coreTotal = checkboxCountReducer((chapter) => (chapter.core ? 1 : 0))
  const coreMastered = checkboxCountReducer((chapter) => ((chapter.core && chapter.checkbox1 && chapter.checkbox2) ? 1 : 0))
  const coreNOTMastered = coreTotal - coreMastered
  const coreEmpty = checkboxCountReducer((chapter) => ((chapter.core && !chapter.checkbox1 && !chapter.checkbox2) ? 1 : 0))
  const coreNONEmpty = coreTotal - coreEmpty

  const core = {
    total: coreTotal,
    mastered: coreMastered,
    notMastered: coreNOTMastered,
    empty: coreEmpty,
    nonEmpty: coreNONEmpty
  }

  const amount = {
    all,
    standard,
    core
  }
  console.log(amount)

  return (
    <>
      <div className='flex-thing'>
        <CheckboxList 
          state={state}
          updateCheckbox1={updateCheckbox1}
          updateCheckbox2={updateCheckbox2}
        />
        <div>
          <GradeDisplay amount={amount}/>
          
        </div>
        <div>
          <p>total: {amount.all.total}</p>
          <p>total mastered: {amount.all.mastered}</p>
          <p>total empty: {amount.all.empty}</p>
          <p>standard: {amount.standard.total}</p>
          <p>standard mastered: {amount.standard.mastered}</p>
          <p>standard empty: {amount.standard.empty}</p>
          <p>core: {amount.core.total}</p>
          <p>core mastered: {amount.core.mastered}</p>
          <p>core NOT mastered: {amount.core.notMastered}</p>
          <p>core empty: {amount.core.empty}</p>
          <p>core NOT empty: {amount.core.nonEmpty}</p>
        </div>
        
      </div>
      
      
    </>
  )
}

export default App
