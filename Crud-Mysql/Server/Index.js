const express = require("express")

const app = express();

const cors = require("cors")
const mysql = require("mysql")

const jwt = require("jsonwebtoken");
const e = require("express");





const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'contact'
})
app.use(express.json())
app.use(cors())




db.connect((err) => {
    if (err) {
        console.log("error")
    }
    else {
        console.log("databse connected")
    }
})



app.get('/api/get', (req, resp) => {

    db.query(" SELECT * FROM user", (err, result) => {
        resp.send(result)
    })

})
app.post("/api/insert", (req, resp) => {



    const data = req.body

    db.query("INSERT INTO user SET ? ", data, (err, result, fields) => {

        if (err) {
            resp.send("error")
        }
        else {
            resp.send(result)
        }

    })



})

app.delete("/api/delete/:id", (req, resp) => {
    const { id } = req.params
    const sqldelete = " DELETE FROM USER WHERE ID =?"
    db.query(sqldelete, id, (error, result) => {
        if (error) {
            resp.send("error")
        }
        else {
            resp.send(result)
        }
    })

})

app.get('/api/get/:id', (req, resp) => {
    const { id } = req.params
    const sqlget = " SELECT * FROM USER WHERE ID=?"
    db.query(sqlget, id, (err, result) => {
        if (err) {
            resp.send("error")
        }
        else {
            resp.send(result)
        }
    })

})


app.put("/api/put/:id", (req, resp) => {
    //    const{ Name , Email,Contact} = req.body;

    const { id } = req.params

    var Name = req.body.Name;
    var Email = req.body.Email;
    var Contact = req.body.Contact;



    let sql = "UPDATE user SET Name =? ,Email=? , Contact=? Where id =? "

    db.query(sql, [Name, Email, Contact, id], (error, result) => {
        if (error) {
            resp.send("error")
        }
        else {
            resp.send(result)
        }
    })





})


app.get("/api/resister/get", (req, resp) => {


    db.query("Select * FROM login ", (error, result) => {

        if (error) {
            resp.send(" error")
        }
        else {
            resp.send(result)
        }

    })


})

app.post("/api/resister/insert", (req, resp) => {



    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    db.query("INSERT INTO login SET ? ", { name, email, password }, (err, result, fields) => {

        if (err) {
            resp.send(err)
        }
        else {
            resp.send(result)
        }

    })



})

app.post('/login', (request, response) => {
    // Capture the input fields
    let email = request.body.email;
    let password = request.body.password;
    // Ensure the input fields exists and are not empty
    if (email && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        db.query('SELECT * FROM login WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
                // Authenticate the user

                response.send(results[0])
                // response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
})




// forget password-section---->


app.get("/forget", (req, resp) => {

})

app.post('/forget', (request, response) => {
    // Capture the input fields
    let email = request.body.email;
    console.log(email)
    // let password = request.body.password;
    // Ensure the input fields exists and are not empty
    if (email) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        db.query('SELECT * FROM login WHERE email = ? ', email, (error, results, fields) => {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
                // Authenticate the user

                response.send(results[0])
                // response.redirect('/home');
            } else {
                response.send('Incorrect email!');
            }
            response.end();
        });
    } else {
        response.send('Please enter email');
        response.end();
    }
})




//  user exist and now create a one time link valide for 15min





app.put("/Reset/:id", (req, resp) => {
  


    const nodemailer =  require("nodemailer")


    const { id } = req.params;
console.log(id)
    var password = req.body.password;
    console.log(password)


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
    text:'here is the reset password link'

    }
    




 if(password){

        db.query("UPDATE login SET password =? Where id =? ", [password , id], (error, result) => {
            if (error) {
                resp.send(error)
            }
            if(result) {
                resp.send(
                    transporter.sendMail(details ,(err, info)=>{
                        if(err){
                            console.log("it has an errorr," ,err)
                        }
                        else{
                            console.log("email has been sent");
                    
                        }
                    })
                )
            }
        })
    }
    else{
        resp.send(" each field mandatory")
    }






})






app.listen(4000, () => {
    console.log(" server is runnig on port 4000")
})