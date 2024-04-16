import Card from "./component/layout/Card"
import Header from "./component/layout/Header"
import SignUp from "./component/pages/SignUp"
import Login from "./component/pages/Login"
import Profile from "./component/pages/Profile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    
    <Router>
      <Header />
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />       
      </Routes>
    </Router>      
    </>
  )
}

export default App
