import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Image from "../Components/Image/Image.png";
import styled from 'styled-components';

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [isUser, setIsUser] = useState(false);

  useEffect(()=> {
    const uname = localStorage.getItem("username");
    
    if(uname){
      setUsername(uname);
      setIsUser(prev => !prev);
    }
  }, []);
  

  return (
    <>
      <nav className="navbar px-5">
        <div>
          <img  className='logo' src={Image} alt='this is the alternative show' />
        </div>

        <div>
          <ul className='navUl'>
          <ListItem>
            <Link to = "/">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to = "/Products">
              Products
            </Link>
          </ListItem>
          <ListItem>
            <Link to = "/About">
              About Us
            </Link>
          </ListItem>
          </ul>
        </div>

        <div className='cart_signup'>
          <Links to = "/Cart">
            <p>
                Cart
                <i className="bi bi-cart"></i>
            </p>
          </Links>
          <p>
            {
              isUser ?

              (<h6>
                Welcome {username}
              </h6>)
               :
               (<>
                <Links to = "/Signin">
                  Sign In
                </Links><i className="bi bi-person-circle"></i>
               </>)
            }
            </p>
            
        </div>
      </nav>
    </>
  )
}


const ListItem = styled.li`

  padding-right: 20px;

  a{
    text-decoration: none;
    color: white;

  }
`

const Links = styled(Link)`
  text-decoration: none;
  color: white;
`

export default Navbar
