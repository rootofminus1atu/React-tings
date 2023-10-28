import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { lightGreen } from '@mui/material/colors'; 


const D_REQUIRED_ALL = 22;

const C_REQUIRED_ALL = 26;
const C_ALLOWED_CORE_EMPTY = 1

const B_ALLOWED_STANDARD_EMPTY = 1
const B_ALLOWED_CORE_EMPTY = 0
const B_REQUIRED_CORE_MASTERY = 6

const A_ALLOWED_STANDARD_EMPTY = 1
const A_ALLOWED_CORE_NOT_MASTERED = 0


const headerStyle = {
  backgroundColor: '#333',
  color: 'white'
}

const defaultCellStyle = {
  transition: 'all 0.3s ease-in-out',
};

const successStyle = {
  ...defaultCellStyle,
  color: lightGreen.A400,
  textShadow: '2px 2px 0 black', 
  fontWeight: 700,
  fontSize: '1.5rem'
};


const CenterTC = ({ children, ...props }) => (
  <TableCell align="center" {...props}>
    {children}
  </TableCell>
);

const HeaderTC = ({ children, ...props }) => (
  <TableCell align="center" style={headerStyle} {...props}>
    {children}
  </TableCell>
);

export default function Grades({ amount }) {

  const Dcheck = amount.all.mastered >= D_REQUIRED_ALL

  const Ccheck = 
    amount.all.mastered >= C_REQUIRED_ALL && 
    amount.core.empty <= C_ALLOWED_CORE_EMPTY

  const Bcheck = 
    amount.standard.empty <= B_ALLOWED_STANDARD_EMPTY &&
    amount.core.empty <= B_ALLOWED_CORE_EMPTY &&
    amount.core.mastered >= B_REQUIRED_CORE_MASTERY

  const Acheck = 
    amount.standard.empty <= A_ALLOWED_STANDARD_EMPTY &&
    amount.core.notMastered <= A_ALLOWED_CORE_NOT_MASTERED

  return (
    <div>
      <TableContainer 
        component={Paper} 
        sx={{ 
          maxHeight: 600, 
          margin: '0 auto',
          '& th, & td': {
            padding: '0.75rem 0.5rem',
          },
          marginBottom: '1rem'
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ bgcolor: '#333' }} >
            <TableRow >
              <HeaderTC style={headerStyle} align="center">Mark</HeaderTC>
              <HeaderTC style={headerStyle} align="center">All</HeaderTC>
              <HeaderTC style={headerStyle} align="center">Standard</HeaderTC>
              <HeaderTC style={headerStyle} align="center">Core half</HeaderTC>
              <HeaderTC style={headerStyle} align="center">Core full</HeaderTC>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <CenterTC sx={Acheck ? successStyle : defaultCellStyle}>A</CenterTC>
              <CenterTC></CenterTC>
              <CenterTC>{amount.standard.mastered}/{amount.standard.total - A_ALLOWED_STANDARD_EMPTY}</CenterTC>
              <CenterTC></CenterTC>
              <CenterTC>{amount.core.mastered}/{amount.core.total - A_ALLOWED_CORE_NOT_MASTERED}</CenterTC>
            </TableRow>
            <TableRow>
              <CenterTC sx={Bcheck ? successStyle : defaultCellStyle}>B</CenterTC>
              <CenterTC></CenterTC>
              <CenterTC>{amount.standard.mastered}/{amount.standard.total - B_ALLOWED_STANDARD_EMPTY}</CenterTC>
              <CenterTC>{amount.core.nonEmpty}/{amount.core.total - B_ALLOWED_CORE_EMPTY}</CenterTC>
              <CenterTC>{amount.core.mastered}/{B_REQUIRED_CORE_MASTERY}</CenterTC>
            </TableRow>
            <TableRow>
              <CenterTC sx={Ccheck ? successStyle : defaultCellStyle}>C</CenterTC>
              <CenterTC>{amount.all.mastered}/{C_REQUIRED_ALL}</CenterTC>
              <CenterTC></CenterTC>
              <CenterTC>{amount.core.nonEmpty}/{amount.core.total - C_ALLOWED_CORE_EMPTY}</CenterTC>
              <CenterTC></CenterTC>
            </TableRow>
            <TableRow>
              <CenterTC sx={Dcheck ? successStyle : defaultCellStyle}>D</CenterTC>
              <CenterTC>{amount.all.mastered}/{D_REQUIRED_ALL}</CenterTC>
              <CenterTC></CenterTC>
              <CenterTC></CenterTC>
              <CenterTC></CenterTC>
            </TableRow>
          
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
