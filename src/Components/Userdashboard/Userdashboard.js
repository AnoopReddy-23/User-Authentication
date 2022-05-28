import React from 'react'
import {useSelector} from 'react-redux'
import './Userdashboard.css'
import { Nav } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";


function Userdashboard() {
  //get userObj from store
  let {userObj}=useSelector((state)=>state.user)

  return (
    <>
      <img src={userObj.profileImg} className="float-end m-3 profile-pic" alt="" />
      <>
        <Nav className="justify-content-center mt-3" defaultActiveKey="/profile">
          <Nav.Item>
            <Nav.Link to="profile" as={NavLink}>User Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link to="cart" as={NavLink}>Cart</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link to="products" as={NavLink}>Products</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
              <Nav.Link to="privateroute" as={NavLink}>Access Private Routes</Nav.Link>
          </Nav.Item> */}
          </Nav>
          {/* outlet */}
          <div className="mt-3">
            <Outlet />
          </div>
      </>
    </>
  )
}

export default Userdashboard