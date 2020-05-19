import React, { Component }  from 'react';
import { BrowserRouter } from "react-router-dom";
import {BrowserRouter as Router, NavLink,Link, Route} from "react-router-dom";
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import Event from './Components/Event';
import Map from './Components/Map';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import User from './Components/User';
import logo from './logo.svg';
import './App.css';
import SearchForm from './Components/SearchForm'

class App extends Component {


   
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "#343a40",
      padding: "10px",
      with: "100vw",
      height: "300px",
      fontFamily: "Arial"
    };
    const image = {
      with: "50px",
      height: "50px",
      
    };
    return(
    <Router>
      <div className="main">
        <header>
          
         <Navbar bg="dark" variant="dark">
         <figure><img style={ image} src="/image/logo1.png"/></figure>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/"><FontAwesomeIcon icon={faHome} />Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="/User" >USERS</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </header>
        <main>
            <Route exact path="/" component={Map}/>
            <Route exact path="/" component={SearchForm}/>
            <Route exact path="/" component={Event}/>
            <Route exact path="/User" component={User}/>
        </main>
       
        <footer style={mystyle}>Trill Développement</footer>  
      </div>
    </Router>
  )
  }
  }
    
     
 

export default App;
