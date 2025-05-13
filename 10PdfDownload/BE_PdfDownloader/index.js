const express = require("express");
const PDFDocument=require('pdfkit')
const app=express()
const cors=require("cors")
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Server Started")
})
app.get("/downloadpdf",(req,res)=>{
// Create a document
const doc = new PDFDocument();

// Browser/postman
// set Header >> Browser/postman >> need to download a pdf file
res.setHeader("content-Type","application/pdf")
res.setHeader("content-Disposition","attachment ; filename=test.pdf")

// Pipe PDF content Directly to the response
doc.pipe(res)

// Add the content to the PDF
doc.fontSize(25).text('Some text with an embedded font!', 100, 100);

// Finalize the PDF
doc.end();

})

function drawTableRow(doc,y,row,widths){
    let x=50;// x axis 
    row.foreach((cell,index)=>{ // iterate over each cell
        // Print and execute here itself
        doc.text(cell,x,y,{width:widths[i],align:"left"}) //cell x y width alignment
    })
}

app.get('/getinvoice',(req,res)=>{
// Create a document >> passing an object constructor PDFDocument >> margin, size
const doc = new PDFDocument({margin:50,size:"A4"});

// Browser/postman
// set Header >> Browser/postman >> need to download a pdf file
res.setHeader("content-Type","application/pdf")
res.setHeader("content-Disposition","attachment ; filename=test.pdf")

// Pipe PDF content Directly to the response
doc.pipe(res)

// Add the content to the PDF

// clientname >>
console.log("Fumika") //>> from the frontend

//drawTableRow() //doc,y,row,widths >>???



// Finalize the PDF
doc.end();

})



const PORT=8000
app.listen(PORT,()=>{
    console.log("Sever Listening",PORT)
})

// How a sample pdf will be downloaded
// Invoice wise download