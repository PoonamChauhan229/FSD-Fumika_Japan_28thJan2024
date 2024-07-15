// Object Oreiented Programming
//class > properties > constructuor >> instance of object || blue of object
// class classname{
//     constructor(){
        // proprties 
//     }
// }
import React from "react";
class ClassAbout extends React.Component{// extends inheritance
    // props passed from somewehre you will receive it
    constructor(props){
      super(props)
      this.state={
        userInfo:{
            name:"Dummy Name",
            login:"Login UserName"
        }
      }  
      console.log("Child Constructor")    
    }
    async componentDidMount(){
        console.log("Child componentDidMount Called")
        //API CALL
        let res= await fetch('https://api.github.com/users/Fumika0523')
        let data=await res.json()
        console.log(data)
        //updating the state
        this.setState({
            // userInfo:{
            //     name:data.name,
            //     login:data.login
            // }
            userInfo:data
        })  
        this.timer=setInterval(()=>{
            console.log("1000")
        },1000) 
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
        clearInterval(this.timer)
    }
    render(){
        console.log("Child Render")
        return(
            <>
                <h1>Class New {this.props.name}</h1>
                <img src={this.state.userInfo.avatar_url} alt="" />
                <h5>{this.state.userInfo.name}</h5>
                <h5>{this.state.userInfo.login}</h5>
                
            </>
        )
    }
}

export default ClassAbout

// create component in class
// state managemnet
// props passing
// api call ||async ComponentDidMount()  || 
// FC> useEffect(()=>{},[])
// state variable
// API call> updatign the state varibale
// calling in useEffect()

// Parent Constructor
// Parent Render
// Parent ComponentDidMount
// Child Constructor
// Child Render
// Child ComponentDidMount


// Parent Constructor ClassProfile
// Parent Render      ClassProfile
// Child Constructor  ClassAbout
// Child Render       ClassAbout

// Child ComponentDidMount ClassAbout
// Parent ComponentDidMount ClassProfile