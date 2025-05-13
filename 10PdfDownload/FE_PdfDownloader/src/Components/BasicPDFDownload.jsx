const BasicPDFDownload = () => {
    // Api call
    // /downloadpdf
    // Sever Listening 8000

    const handleDownload=async()=>{
      try{
        const response=await fetch('http://localhost:8000/downloadpdf');
              console.log(response)
              if(!response.ok){ // false
                throw new Error("Failed to download an PDF")
              }
              const blob=await response.blob() // object {}
              const url=window.URL.createObjectURL(blob)
              console.log(url)

              // created a link as a child
              const link=document.createElement("a")
              link.href=url
              // .download
              link.download="order-summary-pdf"
              // document.body.append(link)  // multiple at a time 
              document.body.appendChild(link) // 1 at a time
              link.click() //click and download

              // remove a link as a child >> js vanilla
              // removeChild
              document.body.removeChild(link)


              // remove >> ObjectURL >> Browser
              window.URL.revokeObjectURL(url)
              

      }catch(e){
        console.log("Download Error",e)
      }



    }
  
  return (
    <div>
        <h1>Order Summary</h1>
        <p>Item :Bluetooth Device WireLess</p>
        <p>Total :$999</p>
        <button
        onClick={()=>handleDownload()}
        >Download Invoice</button>
    </div>
  )
}

export default BasicPDFDownload
