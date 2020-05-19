import React, { Component } from 'react';
import { Nav,Navbar,Form,FormControl,Button,Card,CardGroup } from 'react-bootstrap';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BsPersonFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class User extends Component {
 
      constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/users/liste')
      .then(response => response.json() )
        .then(data => this.setState({users: data, fetching: false,}) );
    
  }

  render() {
     
    return (
      <div className="container">
      <div className="row">
       
        {
           this.state.users.length == 0
            ? 'Loading users...'
            : this.state.users.map(user => (  
           
     
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title><BsPersonFill />{user.user}</Card.Title>
                <Card.Text>
                 < BsEnvelope /> {user.email}
                </Card.Text>
                <Card.Text>
                 <FaCity/> {user.city}
                </Card.Text>
                <Card.Text>
                 CONTRY: {user.contry}
                </Card.Text>
                <Card.Text>
                 CATEGORY: {user.category}
                </Card.Text>
                
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                ))
        }
      </div>
       </div>
    );
  }

}
 
export default User;