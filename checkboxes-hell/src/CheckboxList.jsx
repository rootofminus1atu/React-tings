import React from 'react';

function CheckboxList({ state, updateCheckbox1, updateCheckbox2 }) {

  return (
    <div>
      {state.map((content) => (
        <div key={content.title}>
          <h1>{content.title}</h1>

          {content.chapters.map((chapter) => (
            <div key={chapter.id}>
              <h3>{chapter.id}</h3>
              <input
                type="checkbox"
                id={`checkbox1-${chapter.id}`}
                onChange={(e) => updateCheckbox1(e.target.checked, chapter.id)}
                disabled={chapter.disabled ? true : false}
              />
              {chapter.core && (
                <input
                  type="checkbox"
                  id={`checkbox2-${chapter.id}`}
                  onChange={(e) => updateCheckbox2(e.target.checked, chapter.id)}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CheckboxList;