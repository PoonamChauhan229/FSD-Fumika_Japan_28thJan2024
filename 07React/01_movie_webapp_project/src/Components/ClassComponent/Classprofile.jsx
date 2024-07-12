// Object Oreiented Programming
//class > properties > constructuor >> instance of object || blue of object
// class classname{
//     constructor(){
        // proprties 
//     }
// }
import React from "react";
import ClassAbout from "./ClassAbout";
class Classprofile extends React.Component{// extends inheritance
    // props passed from somewehre you will receive it
    constructor(props){
      super(props)
      this.state={
        count:100,
        num:20,
        count2:700
      }
    }
    render(){
        return(
            <>
                <h1>Class Component-{this.state.count} {this.state.num} {this.state.count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        num:this.state.num+1,
                        count2:this.state.count2+1
                    })
                }}>IncreMent All</button>

                <ClassAbout name={"About page"}/>
            </>
        )
    }
}

export default Classprofile

// function Classprofile1(){
// const [count,setCount]=useSate()
// const [num,setNum]....
//     return(
//         <>
//             <h1>ClassProfile 1</h1>
//         </>
//     )
// }