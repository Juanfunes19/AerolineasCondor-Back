const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: 'aerolineascondor@gmail.com', 
        pass: 'edjlnlkvsxpqrvxq', 
    },
});
// transporter.verify().then( () =>{
//     console.log("Ready for go to mail")
// })
module.exports = {
    transporter
}