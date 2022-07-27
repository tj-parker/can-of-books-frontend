import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import BestBooks from './BestBooks';


const server = process.env.REACT_APP_URI

class BookFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            status: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let {value} = event.target;
        // this.setState({
        //     title: event.target.title.value,
        //     description: event.target.description.value,
        //     status: event.target.status.value
        // });
        console.log(this.state);
    }

    handleSubmit(e) {
        
        e.preventDefault();
        this.setState({
            title: e.target[0].value,
            description: e.target[1].value,
            status: e.target[2].value,
        });
        this.newBook();
        
    }

    newBook = () => {
        axios.post(`${server}/books`, {
            title: this.state.title,
            description: this.state.description,
            status: this.state.status
        })
    }


    render() {
        console.log(server);
        return (
            // <form onSubmit={this.handleSubmit}>
            //     <label>
            //         New Book
            //         <textarea value={this.state.value} onChange={this.handleChange} />
            //     </label>
            //     <input type="submit" value="Add Book" />
            // </form>
          <Container>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="input" placeholder="title" />
                    <Form.Text className="text-muted">
                        Enter a book title
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="input" placeholder="description" />
                    <Form.Text className="text-muted">
                        Enter a description
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control name="status" type="input" placeholder="status" />
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