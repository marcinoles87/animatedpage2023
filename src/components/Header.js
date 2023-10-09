import React, { useEffect, useState } from 'react'
  import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Astro from '../img/ast.png';
import { ArrowRightCircle} from 'react-bootstrap-icons'


function Header() {
  let [loopNum , setloop] = useState(0);
  const [deleting , setDeleting] = useState(false);
  const toRotate = ['Web Developer' , 'Web Designer' , 'FrontEnd' ];
  const [text , setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect( () => {
    let ticker = setInterval( () => {
      const word = toRotate[0]
      const letter = word.charAt(loopNum)
      console.log(letter)
      if(letter => letter.length || word.length > loopNum){
        console.log(loopNum)
        console.log(word.length)
        setloop(loopNum++)
      }
      

    } , 1000)


    return () => clearInterval(ticker)
  },[text])



  
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
        <button onClick={ () =>  console.log('connect')}>Lets connect <ArrowRightCircle  size={20}></ArrowRightCircle> </button>
        </Col>

        <Col xs={12} xl={5} md={6}>
        <img src={Astro} alt='logo-header'></img>
        
        </Col>
      </Row>
    </Container>
        
    
  )
}

export default Header