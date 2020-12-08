import {connect} from "react-redux";
import React, {useState} from "react";
import {Navbar, Nav, NavDropdown, Row, Col, Badge} from "react-bootstrap";
import {Link} from "react-router-dom";
import Login from "./Login.js";
import User from "./User.js";

function TopNav({user})  {
  const [showTools, setShowTools]= useState(false);
  
  return(
      <div id="topNav">
      <Navbar>
      <Navbar.Brand>
      <img src= "#MyLogo">
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.link variant="dark" as={Link} to="/" exact="true">
           Let's go Home
           </Nav.Link>
           {user.name === "" ? null :(
           <NavDropdown title="Tools" 
           onMouseOver={() => setShowTools(true)}
           onMouseLeave={() => setShowTools(false)}
           show={showTools}>
           <Row>
            <Col>
            <p> First</p>
            <NavDropdown.Item as={Link} to="comp1">
              Component1
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="comp2">
              Component2
            </NavDropdown.Item>
            </Col>
            <Col>
            <p> Second</p>
            <NavDropdown.Item as={Link} to="comp3">
              Component3
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="comp4">
              Component4
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="comp5">
              Component5
            </NavDropdown.Item>
            </Col>
           </Row>
          </NavDropdown>
         )}
        </Nav>
        <Nav>
          {user.name===""? <Login /> : <User/>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
 );
}

export default connect (TopNav);
  
        
            
           
