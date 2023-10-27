import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../img/circle.png'


function Skills() {

 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

return(
<section className='skill' id='skills'>
    <Container>
        <Row>
            <Col>
            <div className='skill-bx'>
                <h2>Skills</h2>
                <p>jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkusz</p>
                <Carousel 
                  responsive={responsive} 
                  infinite={true}
                  arrow={true}
                  className='skill-slider'
                  >
                    <div className='skill-percent'>
                      <img src={img1} alt='img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                      <p>HTML</p>
                        <h5 className="legend">90 %</h5>
                    </div>

                    <div className='skill-percent'>
                    <img src={img1} alt='img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                    <p>CSS</p>

                    <h5 className="legend">90 %</h5>
                    </div>

                    <div className='skill-percent'>
                    <img src={img1} alt='img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                    <p>JS</p>

                    <h5 className="legend">60 %</h5>
                    </div>

                    <div className='skill-percent'>
                    <img src={img1} alt='img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                    <p>React</p>

                    <h5 className="legend">70 %</h5>
                    </div>

                    <div className='skill-percent'>
                    <img src={img1} alt='img' style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}></img>
                    <p>Team Player</p>

                    <h5 className="legend">100 %</h5>
                    </div>

               
                </Carousel>
            </div>
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Skills