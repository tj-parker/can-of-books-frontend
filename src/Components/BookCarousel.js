import { Carousel } from "react-bootstrap";
import { Component } from "react";
import BestBooks from "../routes/BestBooks";
import Button from "react-bootstrap";

class BookCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          books: [],
          noBooks: false
        }
      }
}

export default BookCarousel;