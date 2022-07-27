import React from 'react';
import Button from 'react-bootstrap';
import axios from 'axios';

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
        this.setState({
            title: event.target.title,
            description: event.target.description,
            status: event.target.status
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    newBook = () => {
        axios.post('/book', {
            title: this.state.title,
            description: this.state.description,
            status: this.state.status
        })
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Book
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add Book" />
            </form>
);
    }
}

export default BookFormModal;