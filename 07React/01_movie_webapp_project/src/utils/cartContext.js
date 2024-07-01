import { createContext }  from "react";


const cartContext=createContext()
export default cartContext;

//Create Context() > utils folder
//useState Varibale  >> App.jsx > Root Componet
//context will be provide to main/root component >> App.jsx alongwith useState Variable >> with a value={[val,setvale]}

//<contextCreatedName.Provider value={[val,setVal]}>
 // block of code . navbar|| routes ||....
//</contextCreatedName.Provider>

// useContext()
// whenever i need the data in the component
// const userdeinedvaribale=useContext(contextCreatedName)
//Use it wherever u want to use it.


//Prop drilling
//useState Varibale
// passed to navbar||moviediplay > moviecard (done operations)

