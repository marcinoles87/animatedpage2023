import React, { useEffect, useState } from 'react'
  import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Astro from '../img/ast.png';
import { ArrowRightCircle} from 'react-bootstrap-icons'


function Header() {
  let [loopNum , setloop] = useState(0);
  const [deleting , setDeleting] = useState(false);
  const toRotate = ['Front' , 'End' , 'Developer' ];
  const [text , setText] = useState('de');
 

  useEffect( () => {

   let ticker = setInterval( () => {
        tick()
   } , 1000)


   return  () => { clearInterval(ticker)}

  } , [text])

  const tick = () => {
  
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = fullText.substring(0 , fullText.length);

    setText(updateText)

  }


  
  return (

    
    <Container className='banner'>
      <Row className=''>
        <Col xs={12} xl={7} md={6}>
        
        <span className='tagline'>Welcome to my portfolio</span>
        <h1>{text}</h1>
        <span>lorem ipsum lorem ipsum lorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </span>
        <button onClick={ () =>  console.log('connect')}>Lets connect <ArrowRightCircle  size={20}></ArrowRightCircle> </button>
        </Col>

        <Col xs={12} xl={5} md={6}>
        <img className='img-header' src={Astro} alt='img-header'></img>
        
        </Col>
      </Row>
    </Container>
        
    
  )
}

export default Header