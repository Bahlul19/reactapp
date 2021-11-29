import React, { Component } from 'react';
import './App.css';
import First from './component/First/First';
// import Counter from './component/Counter/Counter';


class App extends Component {

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

  render(){
    return(
      <div className="App">

      {/* <First name={ this.state.persons[0].name } email={ this.state.persons[0].email } address={ this.state.persons[0].address }/>
      <First name='Bahlul' email='ab@gmail.com' address='Bd'/>
      <First name='Siddiquee' email='siddiquee@gmail.com' address='SYL'/> */}

      {/* <Counter /> */}

      {
        this.state.persons.map((people, index) => {
          return <First 
                        key={index}
                        name={people.name}
                        email={people.email} 
                        address={people.address}
                  />
        })
      }

    </div>
    );
}
}

export default App;
