import React, { useEffect, useState } from 'react'
  import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Astro from '../img/ast.png';
import { ArrowRightCircle} from 'react-bootstrap-icons'


function Header() {
  let [loopNum , setloop] = useState(0);
  const [deleting , setDeleting] = useState(false);
  const toRotate = ['Web' , 'De' , 'Fron' ];
  const [text , setText] = useState('');
  let [period , setPeriod] = useState(0)

  useEffect( () => {

   let ticker = setInterval( () => {
        tick()
   } , 1000)


   return  () => { clearInterval(ticker)}

  } , [])

  const tick = () => {
    let i = loopNum
    const fullText = toRotate[i];
    const updateText = fullText.charAt(period)

    if(fullText.length > updateText.length){
    setText( (prevText) => { return prevText + updateText})
    setPeriod( period++)
    }else{
      setloop(loopNum++)
    }

    

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