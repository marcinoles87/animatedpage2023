import React, { useState } from 'react';

import img1 from '../img/github2.png';
import img2 from '../img/vip.png';
import img3 from '../img/vip2.png';
import img4 from '../img/think.jpg';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Navbar from 'react-bootstrap/esm/Nav';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/esm/NavItem';
import NavLink from 'react-bootstrap/esm/NavLink';
import Tab from 'react-bootstrap/Tab'
import ProjectCard from './ProjectCard';
import Tabs from 'react-bootstrap/Tabs'

function Projects() {

    const [key , setKey] = useState('')

    const projects = [
        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img2
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img3
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img4
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
          
                            <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab eventKey="home" title="Home">
                                <Row>
                                    {projects.map( (item) => {
                                        return(
                                        <ProjectCard title={item.title} description={item.descirption} imgUrl={item.imgUrl}></ProjectCard>
                                        )
                                    })}
                                </Row>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                Some Text Randome 
                            </Tab>
                            <Tab eventKey="contact" title="Contact" >
                                Tab content for Contact
                            </Tab>
                            </Tabs>

                    
                </Tab.Container>

                </Col>
            </Row>
        </Container>
            
    </section>
  )
}

export default Projects