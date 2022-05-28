import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {Route, Routes, NavLink} from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Signup from '../Signup'
import Contactus from '../Contactus'
import './Header.css'
import Userdashboard from '../Userdashboard/Userdashboard'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate,Navigate} from 'react-router-dom'
import {clearLoginStatus} from '../../Slices/userSlice'
import Cart from '../Cart/Cart'
import Products from '../view-products/Viewproducts'
import Userprofile from '../user-profile/Userprofile'
import AccessPrivateRoutes from '../../Components/AccPriRoute'
import Admindashboard from '../Admindashboard/Admindashboard'
import AddProduct from '../Addproduct/Addproduct'

function Header() {

  //get state from store
  let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector(
    (state)=>state.user
  )

  //get dispath function
  let dispath=useDispatch()

  //get navigate function
  let navigate=useNavigate()

  //logout user
  const  userLogout=()=>{
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  }

  return (
    <div>
        <Navbar collapseOnSelect bg="dark" expand="sm" variant='dark'>
          <Container>
            <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
              {isSuccess !== true ? (
                <>
                  {/* These links can be visible when no user logged in */}
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/signup">
                      Signup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/contactus">
                      ContactUs
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  {/* This dropdown is visible only when a user is logged in */}
                  <NavDropdown title={userObj.username} id="collasible-nav-dropdown">
                    <NavDropdown.Item>Change password</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
        
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>

        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/userdashboard" element={<Userdashboard />} >
            <Route path="profile" element={<Userprofile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            {/* <Route path="privateroute" element={<AccessPrivateRoutes />} /> */}
            {/* Navigating to profile when child path is empty */}
            <Route path="" element={<Navigate to="profile" replace={true} />} />
          </Route>
          <Route path="/admindashboard" element={<Admindashboard />} >
            <Route path="profile" element={<Userprofile />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="products" element={<Products />} />
            {/* Navigating to profile when child path is empty */}
            <Route path="" element={<Navigate to="profile" replace={true} />} />
          </Route>
        </Routes>

    </div>
  )
}

export default Header