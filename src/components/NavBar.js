import React , { useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  const [activeLink , setActive] = useState('home');
  const [scrolled , setScrolled] = useState(false);

  useEffect( () => {

    const onScroll = () => {
    if(window.screenY > 50){
      setScrolled(true)
      console.log('scrolled')
    }else{
      setScrolled(false)
    }
  }

  window.addEventListener("scroll" , onScroll)

  return () => window.removeEventListener("scroll" , onScroll)

  } , [])

  const onUpdateLink = (value) =>{
    setActive(value)
    console.log(value)
  }
  return (

    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src='none' alt='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='nav-bar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={ () => onUpdateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateLink('skills')}>Link</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateLink('projects')}>Skills</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='social'><img src=''></img></a>
                <a href='social'><img src=''></img></a>
                <a href='social'><img src=''></img></a>
            </div>
            <button className='vvd' onClick={ () => console.log('connect')}>Lets Connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default NavBar