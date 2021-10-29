import { signOut } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
  const {user,UserSignOUt,setUser}=useFirebase();

  const handleLogOUt=()=>{
        UserSignOUt().then(result=>{

          setUser({})

        }).catch(error=>{console.log(error);})
  }

    return (
        <header>
           <Navbar bg="info" expand="lg">
  <Container fluid>
    <Navbar.Brand  href="/">Tour-Guid</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink className="navbar-brand  border text-light p-3 m-2" to="/home">Home</NavLink>
        <NavLink className="navbar-brand  border text-light p-3 m-2" to="/places">places</NavLink>
       { !user.email?<NavLink className="navbar-brand text-light border p-3 m-2" to="/register">Log In</NavLink>:<NavLink 
        onClick={handleLogOUt}
       className="navbar-brand text-light border p-3 m-2" to="/register">Log Out</NavLink>}
      </Nav>
      {user.email?<div><h4>{user.displayName}</h4>
      </div>:<h4></h4>}
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button  className="btn-dark px-3 text-light" variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
};

export default Header;