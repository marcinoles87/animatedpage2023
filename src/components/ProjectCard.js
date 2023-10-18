import React from 'react'
import Col from 'react-bootstrap/esm/Col'

function ProjectCard({title , description , imgUrl}) {
  return (
    <Col sm={6} md={4}>
        <div className='card-img'>
            <img src={imgUrl} alt={title}></img>
            <h4>{description}</h4>
            <span>{title}</span>
        </div>

    </Col>
    
  )
}

export default ProjectCard