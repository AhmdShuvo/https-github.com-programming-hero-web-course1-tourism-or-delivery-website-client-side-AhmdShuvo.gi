import { signOut } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

const Header = () => {

  const SeacrhIcon = <FontAwesomeIcon icon={faSearch} />
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
        <NavLink className="navbar-brand  border text-light p-3 m-2 Link " to="/home">Home</NavLink>
        <NavLink className="navbar-brand  border text-light p-3 m-2 Link " to="/places">places</NavLink>
        <NavLink className="navbar-brand  border text-light p-3 m-2 Link" to="/events">Events</NavLink>
        
       
        {user.email?<NavLink className="navbar-brand  border text-light p-3 m-2 Link" to={`/order/${user.email}`}>WhiteList</NavLink>:<h1></h1>}
        {user.email? <NavLink className="navbar-brand  border text-light p-3 m-2 Link" to="/delete">Manage</NavLink>:<h1></h1>}
    <NavLink className="navbar-brand  border text-light p-3 m-2 Link" to="/upload">upload</NavLink>
       { !user.email?<NavLink className="navbar-brand text-light border p-3 m-2 Link" to="/register">Log In</NavLink>:<a 
        onClick={handleLogOUt}
       className="navbar-brand text-light border p-3 m-2 Link" href="/register">Log Out</a>}
       <NavLink className="navbar-brand  border text-light p-3 m-2 Link " to="/about">About US</NavLink>
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
        <Button  className="btn-dark px-3 text-light" variant="outline-success">Search {SeacrhIcon} </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
};

export default Header;