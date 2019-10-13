import React, { Component } from 'react';
import { Modal, Form, Button, Col } from "react-bootstrap";
import Axios from 'axios';
import moment from 'moment';

class UpdateTodo extends Component {

  constructor(props) {
    super(props);
    this.state = { disabled: true, id:'', name: '', content: '', createdDate: '', priority: '' };
    
  }
  
  

  handleSubmit = (e) => {
    

   Axios({
    method: 'put',
    url: `http://localhost:8080/api/user/1/todo/` + this.state.id,
    data: {
      id: this.state.id,
      name: this.state.name,
      content: this.state.content,
      createdDate: this.state.createdDate,
      priority: this.state.priority
    }
  }).then((response => {
    console.log(response);
    this.setState({ todos: response.data });  
  })
  );

    console.log(e);
    window.location = '/dashboard';
  }

  toggle = () => {
    let todo = this.props.todo;
    console.log(todo);
    this.setState({ disabled: !this.state.disabled,id :todo.id, name: todo.name, content: todo.content, createdDate: todo.createdDate, priority: todo.priority })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Update</Button>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={!this.state.disabled}
          onHide={this.toggle}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Todo
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group md="4" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Priority:</Form.Label>
                <Form.Control as="select" name="priority" type="text" placeholder="Choose..." value={this.state.priority} onChange={this.handleChange}>
                  <option></option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Control >
              </Form.Group>

              <Form.Group>
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" name="createdDate" placeholder="Date"  value={moment(this.state.createdDate).format("YYYY-MM-DD")} onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Content:</Form.Label>
                <Form.Control as="textarea" name="content" rows="3" placeholder="Enter Content" value={this.state.content} onChange={this.handleChange} />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="save" onClick={this.handleSubmit}>Save</Button>
            <Button variant="light" onClick={this.toggle}>Close</Button>
          </Modal.Footer>
        </Modal></div>);
  }
}
export default UpdateTodo;