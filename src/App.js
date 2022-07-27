import React from 'react';
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
