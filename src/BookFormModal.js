import React from 'react';
import axios from 'axios';

class BookFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( () => {

        })
    }
    render() {
        return (
            <form onClick={this.handleClick}>
                <button type="submit">Add Book</button>
            </form>
);
    }
}

