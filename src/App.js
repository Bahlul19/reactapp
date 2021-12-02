import React, { Component } from "react";
import "./App.css";
import Books from './component/Books/Books';
class App extends Component {

  state = {
    books: [
      {
        name: 'Javascript',
        price: 20, 
        id:1
      },
      {
        name: 'PHP',
        price: 30,
        id:2
      },
      {
        name: 'Laravel',
        price: 40,
        id:3
      }
    ]
  }

  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id !== id);
    this.setState({
      books: newBooks
    })
  }

  changeHandler = (name, id) => {
    let newBooks = this.state.books.map(book => {
      if(id === book.id) {
       return {
         ...book,
         name
       };
      }
      return book;
    });

    this.setState({
      books: newBooks
    });
  };

  render() {
    return(
      <div className='App'>
        <Books 
          changeHandler ={() => this.changeHandler.bind(this) }
          deleteHandler ={() => this.deleteHandler.bind(this) } 
          books ={ this.state.books }
        />
      </div>
    )
  }
}

export default App;
