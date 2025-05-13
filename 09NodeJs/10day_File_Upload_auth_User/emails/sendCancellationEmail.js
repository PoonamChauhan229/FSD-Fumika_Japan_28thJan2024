//Test Email
//Plain Object

// Create a Nodemailer transporter using any services
// Set up your message options
// Deliver the message using the sendMail() method of your transporter
// createTransport
// postman
const nodemailer=require('nodemailer')

// Create a Nodemailer transporter
const transporter=nodemailer.createTransport({
    //object >> transpoter >> 
    //service 
    //id and pass to authorize it 
    service:"gmail",
    auth:{
        user:"poonam.chauhan229@gmail.com",
        pass:"yyhv eyxu qrkm yavo"
    }
})




// const html="<h1>Welcome to App, Test Email from Nodemailer</h1>"
// Set up your message options
const mailOptions={
    from:"poonam.chauhan229@gmail.com",
    // to:"fumicha.3fan1@gmail.com",
    to:"poonam_c91@yahoo.in",
    subject:"Test Email from NodeMailer",
    text:"This is a test email sent using Nodemailer",
    html:"<h1>Welcome to App, Test Email from Nodemailer</h1>"
    // html:html
    }

// transporter > sendMail()
// Deliver the message using the sendMail() method of your transporter
//  transporter.sendMail(
//     // it will show sent message and error message
//     mailOptions,(error,info)=>{
//         if(error){
//             console.log(error)
//         }else{
//             console.log("Email sent",info.response)
//         }
//     }

//  )
 // figure how you will make a function  >>sendCancellationEmail()
 // email and name : send it through parameter
 // module.exports function
 // delete user profile route
 // xyz(req.user.email,req.user.name)

 // Test it :
 // Postman >> delete operation
         // >> Sucessfully executed >> check ur email for html body using nodemailer
// const htmlTemplate=(name)=>{
//     return `<h1>See you soon ${name}, Test Email from Nodemailer</h1>
//             <img src="https://images.alphacoders.com/111/1119553.jpg" width="250px" height="250px"/>
//     `
//    }
const htmlTemplate=(name)=>{
    return `<div style="width:50%;margin:0 20%; padding:4% 4%;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-seri; background: linear-gradient(to bottom, #6c97b5, #011233);color:white">
        <h1 style="color:rgb(247, 207, 4);font-size: 50px">🛋️🍷MovieStation</h1>
        <h4 style="font-size:35px;margin-bottom: 0px;">Hi, <span style="color:rgb(214, 183, 24)">Fumika</span></h4>
        <h1 style="font-size: 60px;margin-top:20px;">Welcome to MovieStation!</h1>
            <p style="font-size: 25px;">Thank you for joining MovieStation!</p>
            <p style="font-size: 25px;">Your signup is completed and you are ready to start enjoing movies!</p>

            <a href="https://moviestation-23.netlify.app/"target="_blank" style="text-decoration: none;"><button
            style="background-color:rgb(245, 208, 23);height: 55px;width:55%;font-size: 28px;color:white;font-weight: bold;display: block;margin: auto;text-wrap: nowrap;border-radius: 10px;color: black;text-wrap: wrap;text-align: center;">Go to Expolor the movies✔️</button></a>

        <p style="font-size: 25px;text-align: center;">Enjoy the movie!🍿📽️</p>
     
        <a href="https://moviestation-23.netlify.app/"target="_blank"><img src="../images/filmImage1.webp" alt="" style="height:150px;width:32.5%"></a>
        <a href="https://moviestation-23.netlify.app/"target="_blank"><img src="../images/filmImage2.webp" style="height:150px;width:32.5%" alt=""></a>
        <a href="https://moviestation-23.netlify.app/"target="_blank"><img src="https://images.alphacoders.com/111/1119553.jpg" style="height:150px;width:32.5%" alt=""></a>
        <a href="https://moviestation-23.netlify.app/"target="_blank"><img src="../images/filmImage4.webp" alt="" style="height:150px;width:32.5%"></a>
        <a href="https://moviestation-23.netlify.app/"target="_blank"><img src="../images/filmImage5.webp" alt="" style="height:150px;width:32.5%"></a>
        <a href="https://moviestation-23.netlify.app/"target="_blank"><img src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg" alt="" style="height:150px;width:32.5%"></a>
   
    </div>`
}

const sendCancellationEmail=(email,name)=>{
    // console.log("See you soon again...")
    console.log(`Hi ${name}... See you soon again...ur email address "${email}" has been removed from our Databse`)
    // let html=htmlTemplate("Poonam")
    let html=htmlTemplate(name)
    console.log(html)
    const mailOptions={
        from:"poonam.chauhan229@gmail.com",
        to:email,
        // to:"poonam_c91@yahoo.in",
        subject:"Test Email from NodeMailer",
        text:"This is a test email sent using Nodemailer",
        html:html
        }
    transporter.sendMail(
          // it will show sent message and error message
            mailOptions,(error,info)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log("Email sent",info.response)
                }
            }
        
         )
}

// sendCancellationEmail("poonam_c91@yahoo.in","Poonam")
module.exports=sendCancellationEmail;