import React from 'react'
  import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
  return (

    
    <Container className='header'>
      <Row>
        <Col className='col-one'>
        
        <button>Take a litle time to read...</button>
        <h1>Hi I'm Marcin Web Developer</h1>
        <p>lorem ipsum lorem ipsum lorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
        </Col>

        <Col className='col-two'>
        <img src='' alt='logo-header'></img>
        
        </Col>
      </Row>
    </Container>
        
    
  )
}

export default Header