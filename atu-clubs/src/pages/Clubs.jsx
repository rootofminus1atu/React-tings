import React from 'react'
import { clubs } from '../clubs'
import ClubSummary from '../components/ClubSummary'

export default function Clubs() {
  return (
    <div className="page-group">
      <div className="content-group">
        <h1>Our clubs</h1>
        <p>our clubs desc</p>
      </div>

      <div className="all-clubs row content-group">
        {
          clubs.map(club => 
            <ClubSummary key={club.id} club={club}/>
          )
        }
      </div>
      
    </div>
  )
}
