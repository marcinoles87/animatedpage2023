import React from 'react'
  import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Astro from '../img/ast.png';
import { ArrowRightCircle} from 'react-icons'


function Header() {
  return (

    
    <Container className='banner'>
      <Row className='align-items-center'>
        <Col xs={12} xl={7} md={6}>
        
        <span className='tagline'>Welcome to my portfolio</span>
        <h1>Hi I'm Marcin Web Developer</h1>
        <span>lorem ipsum lorem ipsum lorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </span>
        <button onClick={ () =>  console.log('connect')}>Lets connect </button>
        </Col>

        <Col className='col-two'>
        <img src={Astro} alt='logo-header'></img>
        
        </Col>
      </Row>
    </Container>
        
    
  )
}

export default Header