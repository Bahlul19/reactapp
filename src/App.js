import React, { Component } from 'react';
import './App.css';
import First from './component/First/First';
// import Counter from './component/Counter/Counter';
import Example from './Example';


class App extends Component {
/*
  state = {
    persons : [
      {
      name: 'SJ',
      email: 'sjinnovation.com',
      address: 'USA'
      },

      {
        name: 'ABCD',
        email: 'aaa.com',
        address: 'BD'
      }
    ]
  }
  */

  // clickHandler = () => {
  //   alert('hello');
  // }

  state = {
    name : ''
  }

  clickHandler = (event) => {
    console.log(event.target);
  }

  inputHandler = (event) => {
    // console.log(event.target.value);
    // this.setState({
    //   name: event.target.value
    // });
    this.setState({
      name: event.target.value
      });
  }


  render(){
    return(
      <div className="App">

      {/* <First name={ this.state.persons[0].name } email={ this.state.persons[0].email } address={ this.state.persons[0].address }/>
      <First name='Bahlul' email='ab@gmail.com' address='Bd'/>
      <First name='Siddiquee' email='siddiquee@gmail.com' address='SYL'/> */}

      {/* <Counter /> */}

      {/* {
        this.state.persons.map((people, index) => {
          return <First 
                        key={index}
                        name={people.name}
                        email={people.email} 
                        address={people.address}
                  />
        })
      } */}
      
      <input onChange={ this.inputHandler } type="text" value={ this.state.name } placeholder="Please enter your name" />

      <button onClick={ this.clickHandler }>
      {/* <button onClick={ (event) => console.log(event) }> */}
        Click Me
      </button>

      { this.state.name ? <p> Hello MR. {this.state.name}</p> : '' }

      
      <Example name="Tausif"/>

    </div>
    );
}
}

export default App;
