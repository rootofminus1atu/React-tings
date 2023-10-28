import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Checkbox } from '@mui/material';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';


export default function ChapterList({ content, updateCheckbox1, updateCheckbox2, updateDisabled }) {
  return (
    <>
      { content.chapters.map((chapter) => {
        return(
          <TableRow
            key={chapter.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              '& td, & th': {
                color: chapter.disabled ? 'rgba(0, 0, 0, 0.5)' : 'inherit',
                padding: '0.75rem'
              },
            }}
          >
            <TableCell align="center" >
              <DoNotDisturbIcon 
                sx={{
                  '&': {
                    color: 'red'
                  }
                }}
                onClick={() => updateDisabled(!chapter.disabled, chapter.id)}
              />
            </TableCell>
            <TableCell component="th" scope="row" align="center" style={{ paddingRight: 0, paddingLeft: 0 }}>
              {chapter.id}
            </TableCell>
            <TableCell align="left" >
              {chapter.description}
            </TableCell>
            <TableCell align="center">
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
              }}>
                <Checkbox 
                  color="primary" 
                  id={`checkbox1-${chapter.id}`}
                  checked={chapter.checkbox1}
                  onChange={(e) => updateCheckbox1(e.target.checked, chapter.id)}
                  disabled={chapter.disabled ? true : false}
                  sx={{ padding: '0.25rem' }}
                />
                {chapter.core && (
                  <Checkbox 
                  color="primary" 
                  id={`checkbox2-${chapter.id}`}
                  checked={chapter.checkbox2}
                  onChange={(e) => updateCheckbox2(e.target.checked, chapter.id)}
                  disabled={chapter.disabled ? true : false}
                  sx={{ padding: '0.25rem' }}
                />
                )}
              </div>
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
