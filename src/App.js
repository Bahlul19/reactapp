import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import Books from './component/Books/Books';
class App extends Component {
/*
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
*/

state = {
  posts:[

  ]
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    this.setState({
      posts: response.data
    })
  })
  .catch(error => console.log(error));
} 



  render() {
    // console.log(this.state);

    let { posts } = this.state

    if(posts.length === 0){
      return <h1 style={{textAlign: 'center'}}> Loading... </h1>
    }
    else{
      return(
        <div className='container'>
          <ul className='list-group'>
            { posts.map(post => <li key={ post.id } className='list-group-item'>{ post.title }</li>)
            }
          </ul>
        </div>
      )
    }

    return(
      <div className='App'>

        {/* <Books 
          changeHandler ={() => this.changeHandler.bind(this) }
          deleteHandler ={() => this.deleteHandler.bind(this) } 
          books ={ this.state.books }
        /> */}




      </div>
    )
  }
}

export default App;
