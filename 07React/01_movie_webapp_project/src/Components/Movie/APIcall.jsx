import React, { useEffect, useState } from 'react'

const APIcall = () => {
    const [countryData,setCountryData]=useState([])
     const [count,setCount]=useState(0)
    // API call
    //https://restcountries.com/v3.1/all

    const getCountriesData=async()=>{
        console.log("REst countries Called........")
        let res=await fetch('https://restcountries.com/v3.1/all')
        let data=await res.json()// 
        console.log(data)
        setCountryData(data)// updated the state variable with the res of API >> array of object

    }
    // getCountriesData() >> called again and again
    // useEffect(()=>{},[]) Syntax >> Best place to make an API CAll
    // useEffect > async not allowed
    // neat and tidy >> break it and use it 
    //async useEffect(){}
    // 1st way
    // useEffect(()=>{
    //     getCountriesData()
    // })

    // 2nd way
  //   useEffect(()=>{
  //     getCountriesData()
  // },[])// Empty dependancy

    //3rd way
    useEffect(()=>{
      getCountriesData()
  },[count])

  return (
    <div>
      <h1>API Call</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h6>{count}</h6>
      {/* response >  JSON >> String  || Quick Check*/}
      {/* <h4>{JSON.stringify(countryData)}</h4> */}

      {
        countryData.map((element,index)=>(
            <div>Area for a {element.name.common} Country is {element.area}</div>
        ))
        }
        </div>
  )
}

export default APIcall
// 3ways > UesEffect()
// useEffect(()=>{})            > Initial Render + Rendering again and again + Continous Trigger
// useEffect(()=>{},[])         > Initial Render(Only once)
// useEffect(()=>{},[count])    > Initail Render + Whenever my count changes , it will gain render


//Initial Render > When we strt the App, App is loaded in the browser
//[] >>>> Dependancy Array
//[]   > Empty Dependency
//[count] > count is passed as Depedancy 