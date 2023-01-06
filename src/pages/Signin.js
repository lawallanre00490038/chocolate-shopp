import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Signin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = (e)=> {
    e.preventDefault();
    if(username) {
      navigate(`/`);
    }else{
      alert("Kindly enter valid details, thank you")
    }
    
    localStorage.setItem("username", username)
    console.log(username, password)
  }


  return (
    <div>
      <Navbar />
      <form className='form-class'>

        <div className="container">
          <label for="name"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="name" required onChange={(e)=> setUsername(e.target.value)} />

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required onChange={(e)=> setPassword(e.target.value)}/>

          <button type="submit"  style={{backgroundColor: "#7B3F00" }} onClick={submitForm}>Login</button>
          <label>Remember me</label>
          <input type="checkbox" name="remember" className='m-2'/>
        </div>

        <div className="container" style={{backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn" style={{backgroundColor: "#7B3F00" }} >Cancel</button>
          <span className="psw">Forgot <a href='link'>password?</a></span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Signin