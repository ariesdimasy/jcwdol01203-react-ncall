import { useState , useEffect } from 'react'
import axios from "axios"
import './App.css'
import Form from './components/Form'

function App() {
  const [superheroes, setSuperheroes] = useState([])
  //const [todo, setTodo] = useState({})
  
  useEffect(() => {
    // fetch("http://localhost:3000/superheroes")
    // .then((res) => {
    //   return res.json()
    //   //setSuperheroes(res)
    // })  
    // .then((res) => {
    //   setSuperheroes(res)
    // })
    // .catch((err) => {
    //   console.log("err => ", err )
    // })

    axios.get("http://localhost:3000/superheroes")
    .then((res) => {
      console.log(res.data)
      setSuperheroes(res.data)
    })
    .catch((err) => {
      console.log(err)
    })

    // console.log("useEffect")

  },[])


  return (
    <>
      <h1>Superhero List </h1>
      <div style={{ display:"flex"}}>
      {superheroes.map((item, index) => {
        return (<div className='card' key={index} style={{ color: item.color}}>
            <b>{item.name} </b>
            <p>{item.power}</p>
        </div>)
      })}
      </div>

      <Form />
    </>
  )
}

export default App
