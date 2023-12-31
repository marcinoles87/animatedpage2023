import React , { useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavIcon1 from '../img/github2.png'
import NavIcon2 from '../img/linkedin2.png'



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
   
  }
  return (

    <Navbar id="nav"  data-bs-theme="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          LOGO
            {/* <img src='none' alt='logo'></img> */}
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
                <a href='social'><img src={NavIcon1} alt='github'></img></a>
                <a href='social'><img src={NavIcon2} alt='linkedln'></img></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default NavBar