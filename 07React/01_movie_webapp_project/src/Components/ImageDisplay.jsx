import Design from "./Design"
import img1 from '../assets/img1.jpg'
import img2 from '../assets/imga1.avif'

const ImageDisplay = (props) => {
    //Props > Properties //parameters
    //like an attribute passing the args
    let imageDesign={
      display:"flex",
      // border:"4px solid red",
      gap:'20px',
      flexWrap:'wrap'
    }
    const imageArray=[
      {
        id:1,
        imgsrc:img1
      },
      {
        id:2,
        imgsrc:img2
      },
      {
        id:3,
        imgsrc:img1
      },
      {
        id:4,
        imgsrc:img2
      },
      {
        id:5,
        imgsrc:img1
      },
      {
        id:6,
        imgsrc:img2
      },
      {
        id:7,
        imgsrc:img1
      },
      {
        id:8,
        imgsrc:img2
      },
      {
        id:9,
        imgsrc:img1
      },
      {
        id:10,
        imgsrc:img2
      },
      {
        id:11,
        imgsrc:img2
      },
      {
        id:12,
        imgsrc:img1
      },
      {
        id:13,
        imgsrc:img2
      },
      {
        id:14,
        imgsrc:img1
      },
      {
        id:15,
        imgsrc:img2
      }

    ]
  return (
    <div style={imageDesign}>
      {/* <Design imgsrc={img1} imgName={1}/>
      <Design imgsrc={img2} imgName={2} name={props.name}/>
      <Design imgsrc={img1} imgName={3}/>
      <Design imgsrc={img2} imgName={4}/>
      <Design imgsrc={img1} imgName={5}/>
      <Design imgsrc={img2} imgName={6}/>
      <Design imgsrc={img1} imgName={7}/>
      <Design imgsrc={img2} imgName={8}/>
      <Design imgsrc={img1} imgName={9}/>
      <Design imgsrc={img2} imgName={10}/> */}

      {/* {console.log(imageArray)} */}
      {
        imageArray.map((element)=>(
          <Design imgsrc={element.imgsrc} imgName={element.id} name={props.name}/>
        ))
      }
    </div>
  )
}

export default ImageDisplay
