import React from 'react'

import img1 from '../img/background.png'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Navbar from 'react-bootstrap/esm/Nav'
import NavItem from 'react-bootstrap/esm/NavItem'
import NavLink from 'react-bootstrap/esm/NavLink'

function Projects() {

    const projects = [
        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        }
    ]
  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Visual Studio Code comes with Emmet preinstalled. Emmet is a plugin that helps you write HTML and CSS easier using shortcuts.Thanks to Emmet it is really easy to generate lorem ipsum. You no longer have to search for a lorem ipsum online generator.</p>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <NavItem>
                            <NavLink>Active</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>New</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Oldest</NavLink>
                        </NavItem>
                    </Navbar>
                

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects