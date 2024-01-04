import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import One from './components/One'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country/new' element={<Create/>}/>
        <Route path='/country/:id/edit' element={<Edit/>}/>
        <Route path='/country/:id' element={<One/>}/>
      </Routes>
    </>
  )
}

export default App
