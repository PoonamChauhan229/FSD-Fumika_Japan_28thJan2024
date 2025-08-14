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

    //each cell >>header
function drawTableRow(doc,y,row,widths){
    console.log(row)

    let x=50;// x axis 
    row.forEach((cell,i)=>{ // iterate over each cell
        // Print and execute here itself
        doc.text(cell,x,y,{width:widths[i],align:"left"}) //cell x y width alignment
        x+=widths[i]
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

// clientname >>
console.log(req.query) //>> from the frontend

const invoice_Date=new Date().toLocaleDateString()
const invoice_Id="6776778989"

// Add the content to the PDF
// doc.fontSize(25).text(`Invoice Generated for ${invoice_Id}, on ${invoice_Date}  Ordered By-${req.query.client}`, 100, 100);

 doc.fontSize(25)
 .text(`Invoice Generated for ${invoice_Id}`)
 .text(`on ${invoice_Date}`)
 .text(`Ordered By-${req.query.client}`)
 .moveDown()

// Table >> tableheaders + width
const tableHeaders=["item","Qty","Price","Total"] //header row
const colWidths=[200,100,100,100]  //width
drawTableRow(doc,doc.y,tableHeaders,colWidths) //doc,y,row,widths >>???

// sample data
// const items=["abc","45","67",1000]
const items=[
    {name:"Design Work",qty:2,price:150},
    {name:"Developement",qty:5,price:150},
    {name:"Prototype UI",qty:7,price:150},
    {name:"Deployment",qty:7,price:150},
]

items.forEach((element)=>{
    const finalPrice=element.qty*element.price
    drawTableRow(doc,doc.y,[element.name,element.qty,element.price,finalPrice],colWidths) 
})


// Finalize the PDF
doc.end();

})



const PORT=8000
app.listen(PORT,()=>{
    console.log("Sever Listening",PORT)
})

// How a sample pdf will be downloaded
// Invoice wise download