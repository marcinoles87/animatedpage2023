import React from 'react';

import img1 from '../img/github2.png';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Navbar from 'react-bootstrap/esm/Nav';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/esm/NavItem';
import NavLink from 'react-bootstrap/esm/NavLink';
import Tab from 'react-bootstrap/Tab'

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
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        } ,

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        } ,

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
                    
                <Tab.Container id='projects-tabs' activeKey='first'>
                    <Nav variant="pills" defaultActiveKey="/home" justify={true}>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Option 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Option 3 </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                                {projects.map( (item) => {
                                    return(
                                    <Col sm={4}> <h1>{item.title}</h1>   </Col>
                                    )
                                })}
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'> Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey='third'> Lorem Ipsum</Tab.Pane>

                    </Tab.Content>
                </Tab.Container>

                </Col>
            </Row>
        </Container>
            
    </section>
  )
}

export default Projects