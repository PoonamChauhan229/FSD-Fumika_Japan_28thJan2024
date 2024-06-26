import React, { useState } from 'react'
import ImageDisplay from './ImageDisplay'
const Display = () => {
  // Services
  const[show,setShow]=useState(false)
const[castShow,setCastShow]=useState(false)
  const myToggleStyle={
    backgroundColor:"navy",
    color:"white",
    padding:"10px",
    width:"300px",
    display:show==true?"block":"none"
  
  }
  const myCastStyle={
    backgroundColor:"navy",
    color:"white",
    padding:"10px",
    width:"300px",
    display:castShow==true?"block":"none"
  
  }
  return (
    <>
    <button onClick={()=>{
      setShow(!show)
      setCastShow(false)
      }}>{show?<i>🔽</i>:<i>🔼</i>}</button>
      

        <button onClick={()=>{
      setCastShow(!castShow)
      setShow(false)
      }}>Toggle Cast</button>

      <button className='mx-2' onClick={()=>{
       setShow(!show)// summsry state
       setCastShow(false)//caste caste
      }}>{show?<i>🔽</i>:<i>🔼</i>}</button>
    

    {/* conditional styling */}
    <p style={myToggleStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae saepe sapiente, accusantium, repellendus aperiam cupiditate velit facere deleniti asperiores quisquam quae? Dicta accusamus ipsam laboriosam velit repellat quidem modi veritatis.</p>

      {/* conditional Rendering  */}
     { show && <p style={{backgroundColor:"brown",width:"300px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae saepe sapiente, accusantium, repellendus aperiam cupiditate velit facere deleniti asperiores quisquam quae? Dicta accusamus ipsam laboriosam velit repellat quidem modi veritatis.</p>}

     { show ? <p style={{backgroundColor:"orange",width:"300px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae saepe sapiente, accusantium, repellendus aperiam cupiditate velit facere deleniti asperiores quisquam quae? Dicta accusamus ipsam laboriosam velit repellat quidem modi veritatis.</p>:null}
    <p style={myCastStyle}>Fumika Poonam both doing React</p>
    {      console.log(`Show value is`,show)
    }
    {/* any pices of Js > {} */}
    {/* <h2>React-{age}</h2>
    <h2>JS-{val}</h2>
    <button onClick={()=>val++}>Click Val</button>
    <button onClick={()=>{
     // setAge(age=age+1)
     setAge(20)
      }}>Click Age</button>

      <h1 onClick={()=>setDisplay("Welcome To Tokoyo")}>{display}</h1>
      {Sample()}
      <Sample/>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque, placeat cum ad blanditiis velit quas in molestias facere! Voluptatem magni rerum quia rem repellendus molestiae praesentium dolorum neque ipsa velit. Doloremque non repellat, laudantium dignissimos consequuntur perspiciatis dolorum molestiae commodi in asperiores ipsum dolorem et officia illum ea atque expedita porro sint eius reiciendis. Autem dolore officia recusandae ipsam quasi assumenda nihil fugit! Esse magni, animi saepe at exercitationem voluptas reprehenderit quod modi odit, repellat dicta optio, maiores nemo numquam. Aspernatur, magni. Quos ut impedit, aperiam dolore commodi sint quia, dolorum amet labore eum provident neque voluptate numquam deleniti aspernatur animi. Nobis ratione temporibus et? Distinctio quae eaque laborum, possimus id porro quaerat incidunt. Ut alias non repellat id esse qui in consequuntur, eligendi earum corrupti velit officia saepe eum harum, dolores quos animi repudiandae accusantium! Aspernatur quia quisquam temporibus, corrupti, accusantium iusto quae nobis assumenda velit fugit quos cupiditate et dicta. Consequatur repellat vel quas doloribus, fugiat soluta et quos assumenda itaque repudiandae blanditiis a. Consectetur, obcaecati dolorum perferendis ab officia inventore culpa quae libero quos placeat, odio enim eos vel sapiente suscipit aspernatur dolor unde incidunt vero doloremque accusantium vitae, illum reprehenderit! Commodi modi officiis recusandae unde vitae, optio in corporis ad consequatur quam quasi vero molestias amet ex accusamus ipsam perferendis animi adipisci nemo voluptatum illo similique cupiditate veniam. Magni, fugit. Hic harum possimus totam sapiente! Quidem, eum illo laboriosam, at hic veritatis ex autem aut aliquam quasi nemo eaque temporibus ratione fuga. Minus, facere. Animi praesentium deserunt maxime. Quibusdam, delectus illo error cum dolorem, nesciunt consectetur commodi facere aperiam quae maxime quaerat omnis in libero! Pariatur, sapiente quo ipsum expedita, qui tenetur inventore saepe nulla distinctio fugit temporibus dolore sequi fuga voluptatibus voluptatum maiores! Reprehenderit a libero corrupti vitae, quis odio incidunt placeat maxime labore eveniet id repudiandae temporibus quidem ex et debitis molestiae totam. Eum molestiae, voluptatibus ex vel reprehenderit voluptate animi! Assumenda eum expedita nisi facere vel commodi placeat delectus animi, illum accusantium officiis asperiores sint quam eveniet aliquid beatae consequuntur, eligendi harum enim quos aut recusandae explicabo! Velit vitae ipsam ipsa soluta ut cumque, alias consequatur odit quam, corrupti at fugiat totam pariatur doloremque voluptate necessitatibus tempora? Illum modi, earum neque excepturi a numquam mollitia quo nesciunt ducimus eligendi quisquam quae omnis libero ipsum iusto tempore totam maiores voluptatum fugiat odio adipisci. Exercitationem odio quibusdam consequuntur ab! Praesentium veritatis, quia atque aperiam voluptas, odit earum ullam molestias, velit libero deserunt dolor nisi alias quidem impedit repudiandae? Fugiat eos minus sunt mollitia praesentium dolor vitae iure itaque quidem. Quae mollitia possimus maiores nesciunt quidem sequi earum! At quis autem omnis atque quasi dolore tenetur, dicta eaque corporis asperiores facere laboriosam est quos nam porro aut dolor culpa dolorem aliquam inventore. Iure, sapiente deleniti! Doloremque aliquid veniam fugit perspiciatis reiciendis ipsum voluptatem temporibus officia dignissimos voluptas odio, aut obcaecati. Voluptatum ea sapiente alias deserunt, illo fuga dolor reiciendis, inventore assumenda, iste fugit vel magni suscipit quia voluptates sint nemo eligendi placeat. Impedit rerum eaque suscipit? Eaque amet, aliquam blanditiis fugit commodi quam, quae quis culpa nobis dolores, illo quos sapiente. Deleniti, dolorum fuga? Sed molestias praesentium ipsa recusandae. Sed suscipit nihil officia magnam odio vel fugiat, eveniet iste voluptatem! Est maiores adipisci repellat beatae asperiores totam. Doloribus quidem voluptatem aliquam ad aliquid quas, sunt itaque cupiditate excepturi explicabo necessitatibus molestiae soluta aspernatur aperiam nam nulla dolorum. A dolores reiciendis eveniet culpa dolorum placeat doloribus aspernatur maiores odio beatae quod quia ullam similique suscipit excepturi quae, aliquid nulla adipisci eos deserunt. Aliquid deleniti modi aperiam quisquam nobis et minus est eaque hic exercitationem, laboriosam maiores tenetur quod laudantium perspiciatis ut repellendus ipsam accusamus odio qui cum aliquam. Atque dolores ratione magni pariatur officia non asperiores eligendi tempora distinctio et assumenda perspiciatis cum, praesentium aperiam vero deleniti labore aliquam? Eum vitae in ipsam, voluptatibus suscipit qui porro. Molestias culpa quos eaque corporis quisquam, adipisci iure veritatis voluptatum sint temporibus tempora modi hic iusto eum nostrum necessitatibus unde magni expedita consequatur natus iste officia. Magni libero voluptate natus pariatur facere magnam eveniet numquam, delectus nesciunt perferendis, consequatur doloremque alias odit sint veniam nisi nostrum iure reprehenderit similique dignissimos labore in velit eaque praesentium? Optio, consequuntur ratione iure aperiam neque tempore rem qui a culpa, officiis deserunt molestias dolorem nulla, commodi modi temporibus. Fugiat, est aliquid expedita inventore sequi eaque quia voluptate assumenda libero explicabo ullam dolorem vel quo alias reprehenderit laboriosam rerum, eligendi suscipit aperiam debitis. Quos similique voluptatem dignissimos ea dolore. Omnis error, cumque explicabo esse necessitatibus architecto? Nihil, amet cum. Impedit deleniti, laboriosam eum aspernatur eos autem vel odit maiores voluptate laborum aliquid dolorem sed consequatur quidem cum voluptates ipsa atque, harum cumque enim ducimus fugiat tempora recusandae deserunt. Esse illo rem autem magni ex nostrum qui tempore obcaecati pariatur, corporis ea possimus ut neque, veniam dignissimos eveniet unde commodi deserunt dolor officia quas similique nobis minima? Rerum earum, blanditiis labore sequi praesentium recusandae, nobis dolore ipsam iste at quisquam. Officia, atque cupiditate! Doloribus deserunt laudantium sit, aliquid vero earum dolor ad nihil sunt, quasi voluptatum, debitis cum perferendis nulla! Sit sequi quia corporis illo hic, sunt sapiente fuga, excepturi molestias animi corrupti minima in, enim aliquam. Expedita laborum, vel earum labore maxime suscipit fugiat nisi, quis ipsum, hic voluptates eligendi minus? Pariatur debitis, voluptatibus officiis labore non itaque temporibus quos recusandae? Illo ea quo ducimus quos quod aut atque nam! Eum laboriosam cum eos saepe corporis. Sunt voluptates, architecto reiciendis dolores maiores ea iusto qui natus quos, cum consectetur dicta rerum provident, facere repellat optio beatae accusantium voluptas magnam delectus illo consequuntur. Voluptas fuga vitae cumque dolorem, praesentium eaque distinctio maxime molestias similique, aliquam aut velit facere non rem odio adipisci atque iusto ipsam dolore iure, aspernatur quo tempora sit magni! Placeat aliquid praesentium amet magnam. Modi ipsam voluptatem consectetur. Dolore sed sit eaque omnis ex dolorum reprehenderit neque nam aliquid vitae dolor, minima id. Eos ipsa nesciunt voluptatem similique fugit ea unde accusamus expedita pariatur mollitia, id porro corrupti illum, ut excepturi illo.</p>
      <img src={img1} alt="abc" />
      {console.log("Fumika")}
      <img src={imga1} alt="" />*/}
      
      <ImageDisplay name={"Fumika100"}/> 

    
    </>
  )
}

export default Display