
import {useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import imgContact from '../img/contact.jpg'

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails , setFormDetails] = useState(formInitialDetails);
    const [buttonText , setButtonText] = useState('Send');
    const [status , setStatus] = useState({})
    return(
     <section className='contact' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={imgContact} alt='contact-img'></img>
                </Col>
                <Col md={6}>
                    <h2> Get in Touch</h2>
                    <form>
                        <Row>
                            <Col sm={6} className='px-1'></Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
     </section>

    )
}