import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import Axios from 'axios';

class DeleteTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
            showSuccessfulMessage: false,
            id:'',
        };
    }


    handleSubmit = (e) => {
       
        console.log(this.props.todo)
        const { id } = this.props.todo
        Axios({
            method: 'delete',
            url: `http://localhost:8080/api/user/1/todo/` + id,
            'Access-Control-Allow-Origin': true,
            data: { id }
        }).then((response => {
            console.log(response);
            this.setState({ todos: response.data });
            
        })
        );
        console.log(e);
        this.setState({showSuccessfulMessage: true});
        window.location = '/dashboard';
    }




    render() {
        return (
            
            
           <div>
                
                <Button onClick={this.handleSubmit} variant="danger" >Delete</Button>
            </div>
        );
    }
} export default DeleteTodo; 