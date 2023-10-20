import React from 'react'
import Col from 'react-bootstrap/esm/Col'

function ProjectCard({title , description , imgUrl}) {


  return (
    <Col  sm={6} md={4} xs={12}>
        <div className='card-img' >
            <img src={imgUrl} alt={title}></img>
            <div className='card-text'>
                <h4>{description}</h4>
              <h5>{title}</h5>
            </div>
            
        </div>

    </Col>
    
  )
}

export default ProjectCard