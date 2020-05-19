
import React, { Component } from 'react';
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evenement: '',
      city: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
      const mystyle = {

      display:"flex",
      justifyContent:"center",
      backgroundColor: "#696c75",
      border: "1px solid transparent",
      padding: "10px",
      with: "100vw",
      height: "100px",
      fontFamily: "Arial"
    };
    const inputStyle = {
      borderRadius:"5px",
      marginLeft: "10px",
      backgroundColor: "#fff",
      border: "1px solid transparent",
      padding: "10px",
      with: "120px",
      height: "55px",
      fontFamily: "Arial"
    };
    const buttontStyle = {
      borderRadius:"5px",
      marginLeft: "10px",
      
      border: "1px solid transparent",
     
      with: "120px",
      height: "55px",
      fontFamily: "Arial"
    };
    return (
      <div style={ mystyle} >
      <form  style={{ display: "flex", flexDirection: "row",marginTop: "20px" }} onSubmit={this.mySubmitHandler}>
      <h1> {this.state.evenement} {this.state.city}</h1>
      
      <input style={ inputStyle}
        type='text'
        name='Contry'
        onChange={this.myChangeHandler}
      />
     
      <input style={ inputStyle}
        type='text'
        name='city'
        onChange={this.myChangeHandler}
      />

      <input style={ inputStyle}
        type='text'
        name='Date'
        onChange={this.myChangeHandler}
      />
     
      <input style={ inputStyle}
        type='text'
        name='Type'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <Button style={ buttontStyle}  variant="primary"  type='submit' >Search</Button>
      
      </form>
      </div>
    );
  }
}
export default SearchForm;