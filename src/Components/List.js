import React from 'react'
import { Component } from 'react'
import { Button,  ListGroupItem } from 'react-bootstrap'
import UpdateForm from "./UpdateForm"

class List extends Component {
  constructor() {
    super();
    this.state = {
      editForm: false
    }
  }
  handleClick = () => {
    this.props.deleteBook(this.props.id)
  }

  displayForm = () => {
    this.setState({ editForm: true })
  }
  hideForm = () => {
    this.setState({ editForm: false })
  }




  render() {
    return (
      <div>
        <ListGroupItem style={{ fontSize: "30px" }}>
          {this.props.title}
          <p><Button style={{ marginTop: "2rem" }} onClick={this.handleClick} variant='danger' type='button'>Delete Book</Button></p>
          <p><Button style={{ marginTop: "2rem" }} onClick={this.displayForm} variant='info' type='button'>Edit Book</Button></p>
          {this.state.editForm &&
            <UpdateForm bookId={this.props.id} hidingForm={this.hideForm} handleEdit={this.props.editBook} />}
        </ListGroupItem>
      </div>
    )
  }
}

export default List;
