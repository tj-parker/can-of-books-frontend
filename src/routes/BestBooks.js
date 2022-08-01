import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../routes/BestBooks.css";
import BookFormModal from './BookFormModal';




let url = `https://can-of-books3.herokuapp.com`

class BestBooks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      noBooks: false,
    }
  }

  
  componentDidMount() {
    this.getBooks();

  }

  getBooks = () => {
    axios.get(`${url}/books`).then(response => {
      this.setState({ books: response.data });
      if (response.data.length === 0) {
        this.setState({noBooks: true});
      } else this.setState({noBooks: false})
    })
  }

  deleteBook = async (id) => {
    await axios.delete(`${url}/books/${id}`);
    this.getBooks();
  }

  editBook = async (book) => {
    console.log(book)
    let id = book.id
    await axios.put(`${url}/books/${id}`,book);
    this.getBooks();
  }

  handleChange(e) {
    this.setState({
      status: e.target.value
    });
  }

  render() {
    return (
      <Container>
        <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/about">About us</Link>


        </nav>
        <h2>Can Of Books</h2>
        <BookFormModal getBooks={this.getBooks} bookList={this.state.books} />
        {this.state.noBooks &&
          <p>No books currently saved</p>}
        {this.state.books &&
          <Carousel variant="dark" pause="hover" style={{border: "2px solid black" }}>
            {this.state.books.map(book =>
              <Carousel.Item style={{ height: '15rem',}} key={book._id}>
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <p>{book.status}</p>
                </Carousel.Caption>
               </Carousel.Item>)}
          </Carousel>
        }
        <ListGroup>
        {this.state.books.map(book => <List editBook={this.editBook} deleteBook={this.deleteBook} key={book._id} id={book._id} title={book.title}/>)}
        </ListGroup>
      </Container>
    )
  }
}


export default BestBooks;
