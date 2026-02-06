
import { createContext } from 'react'
import './App.css'
import { useState } from 'react';
import ChildA from './Components/ChildA';

// create context
const UserContext = createContext();

function App() {
const [user,setUser] = useState({name:"Pratts"})

  return (
    <>
    <UserContext.Provider value = {user}>

      <ChildA />

    </UserContext.Provider>
  
    </>
  )
}

export default App
export {UserContext}