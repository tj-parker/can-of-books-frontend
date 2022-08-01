import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            status: '',
            id: this.props.bookId
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
        this.props.handleEdit(this.state);
        this.props.hidingForm();
        
    }

    


    render() {
        return (
          <Container>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleTitleChange} name="title" type="input" placeholder="title of Book" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleDescriptionChange} name="description" type="input" placeholder="Book description" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control onChange={this.handleStatusChange} name="status" type="input" placeholder="Book status" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
          </Container>
            
        )
    }
}


export default UpdateForm;