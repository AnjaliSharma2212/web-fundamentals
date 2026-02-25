import { useEffect, useState } from 'react'

import './App.css'

//Functional Components -> its a javascript function that returns JSX(JavaScript XML)
// JSX -> JSX is nothing but JavaScript XML 
//JSX means writing HTML structure like code inside javascript
function Greet({ name }) {
  return (
    <>
      <p>Hello, Welcome  {name} Good Evening.</p>
    </>
  )
}

//PROPS
//props are used to pass the data from parent to child component
// props are read only and passed like HTML attributes

function User(props) {
  return (
    <>
      <p>This is props: {props.name}</p>
    </>
  )
}
//STATE -> state is data that belongs to components and may be change over time
// state is used to Update the UI  when something changes

function PropsExample({ title }) {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* props */}
      <h2>DemoProps</h2>
      <h3>{title}</h3>

     {/* state */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button></>
  )
}

function ControlledComponents(){
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")


  function handleSubmit(e){
    e.preventDefault()
    alert(`Name ${name} Email: ${email}`)
    setName("")
    setEmail("")
  }
// useEffect example: tomanage side effects
  function Timer(){
    const [seconds, setSeconds]= useState(0)
    // runs after every render when second changes
    useEffect(()=>{
     const interval= setInterval(()=>{
           setSeconds((prev)=> prev+1)
        },1000) // second
        //cleanup Function
         return()=> clearInterval(interval)
    },[]) // runs on mount , empty dependency array
  }
  return(
    <>
     <form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder='Enter the Name' onClick={(e)=> setName(e.target.value)}/>
      <input type='email' value={email} placeholder='Enter the email' onClick={(e)=> setEmail(e.target.value)}/>
      <button type='submit'>Submit</button>
     </form>
    </>
  )
}
function App() {


  return (
    <>
       {/* JSX props vs state  */}
      <Greet name="Anjali" />
      <User name="Alice" />
      <PropsExample title="Props vs State Demo" />

      {/* controlled components */}
      <ControlledComponents/>

      {/* useeffect -> side effects*/}
      <Timer/>
    </>
  )
}

export default App
