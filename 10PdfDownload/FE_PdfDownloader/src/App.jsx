import BasicPDFDownload from "./Components/BasicPDFDownload"
import { ClientDownloadInvoice } from "./Components/ClientDownloadInvoice"

function App(){
 return(

  <>
  
    <h1>PDF</h1>
    <BasicPDFDownload/>
    <hr/>
    <hr/>
    <ClientDownloadInvoice/>
  </>
 )
}

export default App
