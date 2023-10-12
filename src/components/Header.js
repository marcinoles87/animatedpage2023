import React, { useEffect, useState } from 'react'
  import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Astro from '../img/moon2.png';
import { ArrowRightCircle} from 'react-bootstrap-icons'


function Header() {
  let [loopNum , setloop] = useState(0);
  const [deleting , setDeleting] = useState(false);
  const toRotate = ['Frontend' , 'Future' , 'Developer' ];
  const [text , setText] = useState('');
 

  useEffect( () => {

   let ticker = setInterval( () => {
        tick()
   } , 400)


   return  () => { clearInterval(ticker)}

  } , [text])

  const tick = () => {
  
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = deleting ? fullText.substring(0 , text.length -1) : fullText.substring(0 , text.length +1) ;

    console.log(i)
    setText(updateText)

    if(!deleting && updateText === fullText){
      setDeleting(true)
      
    }else if(deleting && updateText === ''){
      setDeleting(false);
      setloop(loopNum + 1)
      setText( (prev) => {return  prev + updateText})
    }

  }


  
  return (

    
    <Container className='banner'>
      <Row className=''>
        <Col xs={12} xl={7} md={6}>
        
        <span className='tagline'>Welcome to my portfolio</span>
        <h1 className='header-text'>Hi everyone , my name is Marcin ! {text}</h1>
        <span>lorem ipsum lorem ipsum lorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </span>
        <button className='header-button' onClick={ () =>  console.log('connect')}>Lets connect <ArrowRightCircle  size={20}></ArrowRightCircle> </button>
        </Col>

        <Col xs={12} xl={5} md={6}>
        <img className='img-header' src={Astro} alt='img-header'></img>
        
        </Col>
      </Row>
    </Container>
        
    
  )
}

export default Header