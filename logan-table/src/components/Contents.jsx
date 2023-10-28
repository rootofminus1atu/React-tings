import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ChapterList from './ChapterList';

const headerStyle = {
  backgroundColor: '#333',
  color: 'white'
}


export default function Contents({ state, updateCheckbox1, updateCheckbox2, updateDisabled }) {
  console.log("state is", state)

  return (
    <TableContainer component={Paper} sx={{ 
      maxHeight: 600, 
      margin: '0 auto',
      '& th, & td': {
        padding: '0.75rem 1rem',
      }, 
      }} >
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead sx={{ bgcolor: '#333' }} >
          <TableRow>
            <TableCell style={headerStyle} align="center">Disable</TableCell>
            <TableCell style={{...headerStyle, paddingRight: 0, paddingLeft: 0 }} align="center">Id</TableCell>
            <TableCell style={headerStyle} align="center">Description</TableCell>
            <TableCell style={headerStyle} align="center">Checkmark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          state.map((content, index) => {
            return (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell align="center" colSpan={4} style={{fontWeight: 500}} sx={{ bgcolor: 'action.selected' }}>
                    {content.title}
                  </TableCell>
                </TableRow>
                <ChapterList 
                  content={content} 
                  updateCheckbox1={updateCheckbox1}
                  updateCheckbox2={updateCheckbox2}
                  updateDisabled={updateDisabled}
                />
              </React.Fragment>
            )
          })
        }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
