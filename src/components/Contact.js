
import {useEffect, useState} from 'react';
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
    const [status , setStatus] = useState({});


    const onFormUpdate = (category , value) =>{
            setFormDetails({
                ...formDetails ,
                [category] : value,
            })}

            
    const handleonSubmit =  async (e) => {
        e.preventDefault();
        setButtonText('sending...');
        let response = await fetch("https://localhost:5000/contact/" , {
            method : "POST" ,
            headers : {
                "Content-Type" : "Application/json;charset=utf-8" ,
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus( {success : true , message: "message succesful"});
        }else{
            setStatus({ success:false , message : 'wrong ... please try later'})
        }
       
    }


    return(
     <section className='contact' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={imgContact} alt='contact-img'></img>
                </Col>
                <Col md={6}>
                    <h2> Get in Touch</h2>
                    <form onSubmit={handleonSubmit}>
                        <Row>
                            <Col sm={6} md={12}  className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={ (e) => onFormUpdate('firstName' , e.target.value)}></input>
                                <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={ (e) => onFormUpdate('lastName' , e.target.value)}></input>
                                <input type='email' value={formDetails.email} placeholder='Email' onChange={ (e) => onFormUpdate('email' , e.target.value)}></input>
                                <input type='number' value={formDetails.phone} placeholder='Phone' onChange={ (e) => onFormUpdate('phone' , e.target.value)}></input>
                                <textarea type='text' rows={6} value={formDetails.message} placeholder='Message' onChange={ (e) => onFormUpdate('message' , e.target.value)}></textarea>
                                <button type='submit'>{buttonText}</button>
                            </Col>
                            
                        </Row>
                    </form>
                </Col>
                
                    {status.message &&
                    <Col>
                        <p className={status.success === false ? 'false' : 'success'}> {status.message}</p>
                    </Col>}
                
            </Row>
        </Container>
     </section>

    )
}