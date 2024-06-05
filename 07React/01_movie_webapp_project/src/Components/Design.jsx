const Design = ({imgsrc,imgName,name}) => {//over the fly

// const Design = (props) => {
    //console.log(props)// object
    // destructing in javascript
    // const {imgsrc,imgName}=props// destructing in JS
    
    let arr=[
      {roll:1,name:"Poonam"},
      {roll:2,name:"Fumika"},
      {roll:3,name:"Avni"},
      {roll:4,name:"Gungun"}
    ]
  return (
    <div>
        {/* <div><b style={{fontSize:"25px"}}>Image-{props.imgName}</b></div>
      <img src={props.imgsrc} alt="" height={200} width={317.5}/> */}

      <div><b style={{fontSize:"25px"}}>Image-{imgName}-{name}</b></div>
      <img src={imgsrc} alt="" height={200} width={317.5}/>

      {
        //fetch rescountries       
        console.log(arr)
      }
      {
        // console.log(arr[0].name)
        arr.map((element)=>(
          console.log(element.name)
        ))
      }
    </div>
  )
}

export default Design
