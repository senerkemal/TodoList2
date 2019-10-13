import React, {Component} from 'react';
import {Modal, Form, Button, Col} from "react-bootstrap";
import Axios from 'axios';
import moment from 'moment';




class AddTodo extends Component {
    
    constructor(props){
        super(props);
        this.state={
          disabled: true,
          name:'',
          content:'',
          date:'',
          priority:'',
          id:'',
          hasLoginFailed: false,
          showSuccessfulMessage: false,
          


        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this) 
    }

    handleSubmit = (e) => {
      if(this.state.name!=null && this.state.content!=null && this.state.priority!=null && this.state.date!=null )
    {
      
      Axios({
      method: 'post',
      url: `http://localhost:8080/api/user/1/todos`,
      'Access-Control-Allow-Origin': true,
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
      this.setState({showSuccessfulMessage: true, hasLoginFailed: false})
      window.location = '/dashboard';
    }
  


    else{
      
      this.setState({showSuccessfulMessage: false})
      this.setState({hasLoginFailed:true})
  }
  }

  



  toggle = () => {
    
    console.log(this.props);
    this.setState({ disabled: !this.state.disabled, id: this.props.id , name: this.props.name, content: this.props.content, createdDate: this.props.createdDate, priority: this.props.priority })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  loginClicked = () => {
    
        
       
        
        
    

  }

    
      
    


    render(){
        
        return(            
          <div>
            {this.state.showSuccessfulMessage && <div className= "alert alert-warning">New todo added!</div> }
            {this.state.hasLoginFailed && <div className="alert alert-danger">Name, Priority, Date, Content can not be null!</div>}
            <Button variant="dark" onClick={this.toggle}>New Todo</Button>
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
                Add Todo
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
          </Modal>
        </div>);
    }
}
export default AddTodo;