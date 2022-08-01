import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';




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
           const response = await axios.post(`${url}/books`, book);
           this.props.getBooks();
        } catch(e){}
        
    }


    render() {
        return (
          <Container>
            <Form style={{marginBottom:"3rem", textAlign:"center"}} onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control onChange={this.handleTitleChange} name="title" type="input" placeholder="Title" />
                    <Form.Text className="text-muted">
                        Enter a book title
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control onChange={this.handleDescriptionChange} name="description" type="input" placeholder="Description" />
                    <Form.Text className="text-muted">
                        Enter a description
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control onChange={this.handleStatusChange} name="status" type="input" placeholder="Status" />
                    <Form.Text className="text-muted">
                        Enter status of checkout
                    </Form.Text>
                </Form.Group>
                <Button style={{marginTop:"1rem"}} variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
          </Container>
            
        );
    }
}

export default BookFormModal;