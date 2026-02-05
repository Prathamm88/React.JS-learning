import React, { useEffect, useEffectEvent, useState } from 'react'
import './Counter.css'
const Counter = () => {
   const [count, setCount]= useState(0);
//   return (
//     <div className='counter-container'>
//       <p id='para'>you have clicked {count } times </p>
//       <button id='btn' on onClick={()=>{setCount(count+1)}}>click me </button>
//     </div>
//   


// this is the first variation of use effect hooks, there are total of 3 variations of it 
// in first it will run after render
// in second First Render + When Dependency Changes
// third one runs on every render a
// useEffect(()=>{
//   alert("i will run on only first render ") // first variation

// },[])

// function handleClick(){
//   setCount(count+1);
// }

// second variation
useEffect(()=>{
  alert("i will run only when count changes  ") 

},[count])

// third variation
// useEffect(()=>{
//   alert("i will run everytime  ") 

// })

function handleClick(){
  setCount(count+1);
}

return(

<div>
  <button onClick={handleClick}>
    click me !
  </button>
  <br />
  count is : {count}
</div>

)
}
export default Counter 
