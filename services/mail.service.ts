import {createTransport} from 'nodemailer'
 const mailService = createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    debug:true,
    logger:true,
    ignoreTLS:true,
    auth: {
      user: "4cd04e54442cce",
      pass: "ad5b6fe1bc6076"
    },
    tls:{
        rejectUnauthorized:false
    }
  });


  export default mailService