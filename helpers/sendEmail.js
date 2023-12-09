import path from 'path';
import nodemailer from 'nodemailer'; // -------nodeMail imap-----
import dotenv from 'dotenv';
const configPath = path.resolve('./', 'config', '.env');

dotenv.config({ path: configPath });
const { EMAIL_FROM, EMAIL_PASSWORD } = process.env;


const config = {
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  // secure: 'SSL',
  auth: {
    user: 'artimyk@ukr.net',
    pass: EMAIL_PASSWORD
  },
};
const transporter = nodemailer.createTransport(config);
// -----------data exempl ---------------
// const data= {
//     from: EMAIL_FROM, // sender address
//     to: ' youremail@gmail.com', // list of receivers
//     subject: 'Hello from Node.js ', // Subject line
//     text: ' Test email', // plain text body
//     html: '<b>Hello world?</b>  <h1> Test email from GoIT Node.js </h1> <p> ', // html body
//   }

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(data) {
  // send mail with defined transport object

  try {
    const email = await transporter.sendMail({
      ...data,
      from: EMAIL_FROM, // sender address
    });

    console.log(`Message sent: to ${data.to}`);
    return email;
  } catch (error) {
    console.log('error: ', error);
  }
}

export default sendEmail;
