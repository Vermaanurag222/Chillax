import React from 'react'
import { Col, Row } from 'reactstrap'
import MainCarousel from '../Components/MainCarousel'
import NewReleases from '../Components/NewReleases'


const Home = () => {
  return (
    <div className='container border-top'>
      <Row className='text-center'>
        <Col>
          <h3>Introducing new music platform for you! 🎵</h3>
          <MainCarousel />
        </Col>
        {/* <Col><MainCarousel /></Col> */}
      </Row>
      <Row>
        <Col>
          <NewReleases />
        </Col>
      </Row>
    </div>
  )
}

export default Home