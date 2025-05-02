import 'react-router-dom'
import {Home} from "./pages/Home"
import Login from "./pages/Login"
import {Signup} from "./pages/Signup"
import Chat from './pages/Chat'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='/chat' element ={<Chat/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
