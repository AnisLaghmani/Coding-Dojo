import Home from "./components/Home"
import UpdateMovie from "./components/UpdateMovie"
import CreateMovie from "./components/CreateMovie"
import NavBar from "./components/NavBar"
import {Routes,Route,Navigate} from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'}/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/movies/new" element={<CreateMovie/>} />
        <Route path="/movies/:id/edit" element={<UpdateMovie/>} />

      </Routes>
    </>
  )
}

export default App
