import React from 'react'
import LinkButton from '../components/LinkButton'
import { getImgUrl } from '../helpers'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='page-group'>
      <div className="content-group">
        <h1>Welcome to ATUS Clubs and Societies</h1>
        <p>Discover a world of excitement and camaraderie with our exceptional clubs and societies. Our mission is to provide an enriching experience that goes beyond the ordinary. With a diverse range of clubs, we're proud to offer unique opportunities for every passion and interest.</p>
        <img className="img-fluid" src={getImgUrl("club-thing.jpg")} alt="An Example Club Image"></img>
      </div>

      <div className="content-group">
        <h2>Explore Our Clubs</h2>
        <p>Our clubs are the heartbeat of our vibrant community. Dive into the world of fishing, test your skills on the golf course, explore the wonders of chemistry, or discover the discipline of our military club. Each club offers a unique adventure, led by passionate individuals who are eager to share their expertise. Whether you're looking for relaxation, education, or adrenaline, we have something for everyone.</p>
        
        <Button as={Link} to="clubs" variant="primary">
          View all Clubs
        </Button>
      </div>
    </div>
  )
}
