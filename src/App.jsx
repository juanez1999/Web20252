import './App.css'
import Form from './components/Form/Form'
import { useState } from 'react'

function App() {
  // const [list,setList] = useState([]); //Estado macro
  
  //En el return cuando coloco las llaves le digo que se comporte como js
  return (
    <>
      {/* <Form setList={setList}/> */}
      <Form />
      {/* <ItemList/> */}
    </>
  )
}

export default App
