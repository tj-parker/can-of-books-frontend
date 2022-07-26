import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  axios = require('axios');
  getBooks = () => {
    axios.get('/books')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  componentDidMount() {
    this.getBooks();

  }
  render() {

    /* TODO: render all the books in a Carousel */
      ;
  

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>{this.state.books.carousel({
                interval: 2000
          })}</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
