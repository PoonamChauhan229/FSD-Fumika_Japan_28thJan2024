import { useState } from "react"

export function ClientDownloadInvoice(){
    const [clientName,setclientName]=useState("")

     const handleDownload=async()=>{
      try{
        // const response=await fetch(`http://localhost:8000/getInvoice?client=${encodeURIComponent(clientName)}`);
         const response=await fetch(`http://localhost:8000/getInvoice?client=${clientName}`);
         
         console.log(`http://localhost:8000/getInvoice?client=${clientName}`)
         console.log(``)
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
  
    return(
        <>
        <h1>Client Download Invoice</h1>
        <input type="text" 
        value={clientName}
        onChange={(e)=>setclientName(e.target.value)}
        name="" id="" placeholder="client name"/>
        <button
        onClick={()=>handleDownload()}
        >Download Invoice</button>
        
        </>
    )
}
