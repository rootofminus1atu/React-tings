import React from 'react'

const D_REQUIRED_ALL = 3;

const C_REQUIRED_ALL = 4;
const C_ALLOWED_CORE_EMPTY = 1

const B_ALLOWED_STANDARD_EMPTY = 1
const B_ALLOWED_CORE_EMPTY = 0
const B_REQUIRED_CORE_MASTERY = 2

const A_ALLOWED_STANDARD_EMPTY = 1
const A_ALLOWED_CORE_NOT_MASTERED = 0

export default function GradeDisplay({ amount }) {

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
      <p>TOTAL CHECKMARKS = {amount.all.total}</p>
      <p>TOTAL STANDARD = {amount.standard.total}</p>
      <p>TOTAL CORE = {amount.core.total}</p>
      <p style={
        Acheck
        ? { backgroundColor: 'green' } 
        : { backgroundColor: 'gray' }
      }>
        A {amount.standard.mastered}/{amount.standard.total - A_ALLOWED_STANDARD_EMPTY} 
        and {amount.core.mastered}/{amount.core.total - A_ALLOWED_CORE_NOT_MASTERED}
      </p>
      <p style={
        Bcheck
        ? { backgroundColor: 'green' } 
        : { backgroundColor: 'gray' }
      }>
        B {amount.standard.mastered}/{amount.standard.total - B_ALLOWED_STANDARD_EMPTY}
        and {amount.core.nonEmpty}/{amount.core.total - B_ALLOWED_CORE_EMPTY}
        and {amount.core.mastered}/{B_REQUIRED_CORE_MASTERY}
      </p>
      <p style={
        Ccheck 
        ? { backgroundColor: 'green' } 
        : { backgroundColor: 'gray' }
      }>
        C {amount.all.mastered}/{C_REQUIRED_ALL} and {amount.core.nonEmpty}/{amount.core.total - C_ALLOWED_CORE_EMPTY}
      </p>
      <p style={
        Dcheck 
        ? { backgroundColor: 'green' } 
        : { backgroundColor: 'gray' }
      }>
        D {amount.all.mastered}/{D_REQUIRED_ALL}
      </p>
    </div>
  )
}
