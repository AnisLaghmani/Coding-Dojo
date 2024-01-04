import {Routes,Route,Navigate} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Home from './pages/Home'
import OneNote from './pages/OneNote'


function App() {

  return (
    <>
      {/* Navbar */}
      <NavBar/>
      <Routes>
        {/* redirect */}
        <Route path='/' element={<Navigate to ='/notes'/>}/>
        {/* HomePAGE url http://localhost:5173/notes   */}
        <Route path='/notes' element={<Home/>}/>
        {/* Create url http://localhost:5173/notes/create   */}
        <Route path='/notes/new' element={<Create/>}/>
        {/* Edit url http://localhost:5173/notes/:id/edit   */}
        <Route path='/notes/:id/edit' element={<Edit/>}/>
        {/* ViewOne url http://localhost:5173/notes/:id   */}
        <Route path='/notes/:id' element={<OneNote/>}/>
        {/* redirect */}
        <Route path='*' element={<Navigate to='/notes'/>}/>

      </Routes>
      

    </>
  )
}

export default App
