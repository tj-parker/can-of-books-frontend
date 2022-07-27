import React from 'react';

import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import BookFormModal from './BookFormModal';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './routes/BestBooks';
import Header from './Header';
import { Container } from 'react-bootstrap';


class App extends React.Component {
  render() {
    return (
      <Container>
      
      <BestBooks></BestBooks>
      </Container>
    )
  }
}

export default App;
