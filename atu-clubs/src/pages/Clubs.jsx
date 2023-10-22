import React from 'react'
import { clubs } from '../clubs'
import ClubSummary from '../components/ClubSummary'
import { Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

export default function Clubs() {
  return (
    <div className="page-group">
      <div className="content-group">
        <h1>Our clubs</h1>
        <p>our clubs desc Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima vero nemo illum nostrum nesciunt autem est enim nam soluta, harum, porro, natus dolore totam quis ab doloribus suscipit reprehenderit voluptate ea asperiores magni eveniet sequi iusto. Doloremque atque, sequi porro recusandae eos accusamus ea earum at laborum fugit deserunt assumenda?</p>
      </div>

      <Row className="all-clubs content-group">
        {
          clubs.map(club => 
            <ClubSummary key={club.id} club={club}/>
          )
        }
      </Row>
    </div>
  )
}
