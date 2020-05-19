import React, { Component } from 'react';
import { Nav,Navbar,Form,FormControl,Button,Card,CardGroup } from 'react-bootstrap';
 
class Event extends Component {
 /*constructor(props) {
    super(props);
 
    this.state = {
      data: null,
    };
  }
  state ={
    loading:true,
    evenement:null
  };
 */

 /*constructor(props) {
      super(props);
      this.state = {
        evenements: [],
        fetching: true,
    }


 componentDidMount() {
      const api = `http://127.0.0.1:8000/api/evenements/liste`
      fetch(api)
        .then(response => response.json() )
        .then(data => this.setState({evenements: data, fetching: false,}) );
    }*/
/*
  async componentDidMount() {
    const url = "http://127.0.0.1:8000/api/evenements/liste"
     const response = await fetch( url);
     const data = await response.json()
     this.setState({ evenement: data[0],loading:false})
     console.log(data[0]);
     
      */



      constructor() {
    super();
    this.state = { evenements: [] };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/evenements/liste')
      .then(response => response.json() )
        .then(data => this.setState({evenements: data, fetching: false,}) );
    
  }

  render() {
     
    return (
      <div className="container">
      <div className="row">
       
        {
           this.state.evenements.length == 0
            ? 'Loading evenements...'
            : this.state.evenements.map(evenement => (  
                 
     
            <Card border="primary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{evenement.name}</Card.Title>
                <Card.Text>
                 ADRESS: {evenement.address}
                </Card.Text>
                <Card.Text>
                 CITY: {evenement.city}
                </Card.Text>
                <Card.Text>
                 CONTRY: {evenement.contry}
                </Card.Text>
                <Card.Text>
                 LATITUDE: {evenement.Lat}
                </Card.Text>
                <Card.Text>
                 LONGITUDE: {evenement.lng}
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
 
export default Event;

