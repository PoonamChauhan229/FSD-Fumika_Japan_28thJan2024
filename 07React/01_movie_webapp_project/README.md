Project Documentation

About the project

Functional Component 
>>>

const students = [
    {
      nickName: "Yamuna",
      pic: "https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg",
    },

    {
      nickName: "Vindya",
      pic: "https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg",
    },

    {
      nickName: "Sushil",
      pic: "https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png",
    },
    {
      nickName: "Bharti",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPyLBCLuRQ2EMf1Tdz8GRtdsy2KAGUcZgAg&usqp=CAU",
    },
    {
      nickName: "Shivam",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGf1LsCO_POD_MWK0T40UPrQZfYOjgU0SvQ&usqp=CAU",
    },
  ];


  const movie=[
    {
      movieposter:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      moviename:"RRR",
      rating:"8.8",
      summary:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments"
    },
    {
      movieposter:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      moviename:"Iron man 2",
      rating:"7",
      summary:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      movieposter:"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      moviename:"No Country for Old Men",
      rating:"8.1",
      summary:"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      movieposter:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      moviename:"Jai Bhim",
      rating:"8.8",
      summary:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"
    },
    {
      movieposter:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      moviename:"The Avengers",
      rating:"8",
      summary:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
    },
    {
      movieposter:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      moviename:"Interstellar",
      rating:"8.6",
      summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      movieposter:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      moviename:"Baahubali",
      rating:"8",
      summary:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      movieposter:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      moviename:"Ratatouille",
      rating:"8",
      summary:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    },
    {
      movieposter:"https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      moviename:"96",
      rating:"8.6",
      summary:"K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."
    },
    {
      movieposter:"https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      moviename:"M.S. Dhoni: The Untold Story",
      rating:"7.9",
      summary:"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams."
    },
    {
      movieposter:"https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      moviename:"Dark Knight",
      rating:"9",
      summary:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice"
    },
    {
      movieposter:"https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      moviename:"King Kong",
      rating:"9",
      summary:"Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
    },
  ]


  CRUD
  CREATE      >FB(CREATE POST/ADD POST)          >POST       >>ADDING SOMETHING TO THE DB/SERVER
  READ        >FB(VIWING THE CONTENT/WALL)       >GET        >>RETRIVING THE DATA
  UPDATE      >FB(Edit OPtion)                   >PUT        >>UPDATING THE DATA
  DELETE      >FB(DElete Option)                 >DELETE     >>DELETING THE DATA

  HTTP METHODS: axios/fetch >> 
  GET
  POST
  PUT
  DELETE

  WHAT METHODS?
  GET METHOD  >> RETRIVING/FETCHING THE DATA FROM THE MOCKAPI URL(CONSOLE) AND DIPLAY TO THE UI >> USEEFFECT
  POST METHOD >> 

  REDUX TOOLKIT

  Whereever a button is pressed
  An action is dipatched , that action calls up the reducer function and that reducer function is responsible to update the store

  When we want data from redux store
  We have to subscribe the store, By using useSelector() , we can subscribe the store , fetch the data and update in UI.


RTK
MATRerial UI
Class component
Life cycles methods of Class Component >> THEORY 
TO DO APP in RTK REACT

Step 1:
Installtions:
An existing app
npm install @reduxjs/toolkit
npm install react-redux
>> Chek in package.json

Step 2 :
Create a Redux Store
> utilis > store.js

import { configureStore } from '@reduxjs/toolkit'

const store=configureStore({
 // contain the slices
})
export default store

Step2:
Create an Slice 
> cartSlice.js
> textSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[] // kept as a empty
    },
    reducers:{
        
    }
})
export default cartSlice

Step3:
Provide the Slice to the store

Step4:
Provide the Redux Store to React

textSlice