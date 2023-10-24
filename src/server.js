

const express = require('express')
const router = express.Router();
const cors = require('cors')
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');



const contactEmail = nodemailer.createTransport({
    service: 'gmail' ,
    auth : {
        user : "marcinoles87@gmail.com",
        pass: "xxx" ,
    }
});

console.log(contactEmail)

contactEmail.verify( (error) => {
    if(error) {
        console.log(error)
    }else{
        console.log('ready to send')
    }

})

router.post('/contact', (req , res) => {
    const name = req.body.firsName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    const mail = {
        from : name ,
        to : 'mrc87@gmail.com',
        subject : 'contact from personal page' ,
        html : `<p> name : ${name}</p>
                <p> email : ${mail} </p>
                <p> message : ${message} </p>`

    };

    contactEmail.sendMail(mail , (error) => {
        if(error){
            res.json(error)
        }
    })

})


let mailOptions = {
    from: "sss@o2.pl",
    to: "marcino@gmail.com",
    subject: 'portfolio maila ',
    text: "Hello world?",
    html: "<b>Hello world?</b>",
};

transport.sendMail(mailOptions);