

// var nodemailer =  require("nodemailer");
// var transporter = nodemailer.createTransport({
//    service : 'gmail',
//     auth:{
//         user:'pushpendrapatel8055@gmail.com',
//         pass:'Deepak8055@'
//     }
// });

// var mailOptions = {
//     from :'pushpendrapatel8055@gmail.com',
//     to:'pushpendrapatel8055@gmail.com',
//     subject: "testing mail sending",
//     text:'hello i am pushpendra patel'
// }

// transporter.sendMail(mailOptions,(err,info)=>{
//     if(err){
//         console.log("it has an eror",err)
//     }
//     else{
//      console.log("email has been sent" , info.response)
//     }
// })

const nodemailer =  require("nodemailer")

const transporter =  nodemailer.createTransport({
    service:'gmail',
    auth : {
        user:'pushpendrapatel8055@gmail.com',
        pass:'vrogrojtbyqtsqko'
    }


})

var details ={
from:'pushpendrapatel8055@gmail.com',
to:'pushpendracontact8055@gmail.com',
subject:'testig mail sending',
text:'hell i am here pushpendra'
}


transporter.sendMail(details ,(err, info)=>{
    if(err){
        console.log("it has an errorr," ,err)
    }
    else{
        console.log("email has been sent");

    }
})