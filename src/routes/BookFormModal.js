import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import BestBooks from './BestBooks';


const server = process.env.REACT_APP_PORT
let url = `https://can-of-books3.herokuapp.com`

class BookFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            status: '',
            idToDelete: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }
    
    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    
    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }
    
    handleSubmit(e) {
        
        e.preventDefault();
        console.log(this.state);
        this.newBook(this.state);
        
    }

    newBook = async (book) => {
        try {
           const response = await axios.post(`${server}/books`, book);
           const newBook = response.data;
        } catch(e){}
        
    }

    // deleteBook = async () => {
    //     for(let i =0; i < this.props.booklist.length; i++) {
    //         if (this.state.title === this.props.booklist[i]) {
    //             this.setState({idToDelete: this.props.booklist[i]._id})
    //         }
    //     }
    //     try {
    //         await axios.delete(`${server}/books/${this.state.idToDelete}`);
    //     } catch(e) {
    //         console.log(e);
    //     }
    //     // this.setState({idToDelete: id});
    //   }


    render() {
        return (
          <Container>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleTitleChange} name="title" type="input" placeholder="title" />
                    <Form.Text className="text-muted">
                        Enter a book title
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleDescriptionChange} name="description" type="input" placeholder="description" />
                    <Form.Text className="text-muted">
                        Enter a description
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control onChange={this.handleStatusChange} name="status" type="input" placeholder="status" />
                    <Form.Text className="text-muted">
                        Enter status of checkout
                    </Form.Text>
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
          </Container>
            
        );
    }
}

export default BookFormModal;