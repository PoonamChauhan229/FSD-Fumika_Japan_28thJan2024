import { useState } from "react"

export function ClientDownloadInvoice(){
    const [clientName,setclientName]=useState("")

    const handleDownload=()=>{
        console.log("Btn is presses",clientName)
        // Other logics
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
