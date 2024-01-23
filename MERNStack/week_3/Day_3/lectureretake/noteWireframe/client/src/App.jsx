import {Routes,Route,Navigate} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Home from './pages/Home'
import OneNote from './pages/OneNote'
import LogReg from './pages/LogReg'


function App() {

  return (
    <>
      <Routes>
        {/* redirect */}
        <Route path='/' element={<LogReg/>}/>
        {/* HomePAGE url http://localhost:5173/notes   */}
        <Route path='/notes' element={<><NavBar/><Home/></>}/>
        {/* Create url http://localhost:5173/notes/create   */}
        <Route path='/notes/new' element={<><NavBar/><Create/></>}/>
        {/* Edit url http://localhost:5173/notes/:id/edit   */}
        <Route path='/notes/:id/edit' element={<><NavBar/><Edit/></>}/>
        {/* ViewOne url http://localhost:5173/notes/:id   */}
        <Route path='/notes/:id' element={<><NavBar/><OneNote/></>}/>
        {/* redirect */}
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
