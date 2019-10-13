import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import  'react-datepicker/dist/react-datepicker.css';
import {Table, Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';


class TodoList extends Component{
    constructor(props){
        super(props)
 
        this.state= {
         date: new Date(),
         isLoading: false,
         todos: [],
         Users: []
 
     }
            
        }
 
     async componentDidMount() {

        axios.get('https://localhost:8080/user/{userName}/todos').then(res => {console.log(res);
        this.setState({ todos: res.data});
     });
        const response= await fetch('/todos');
         const body= await response.json();
         this.setState({Todos: body, isLoading: false });

     }
   
    render(){

        const {todos, isLoading} = this.state;

        

            const todoItems=
            todos.map( todo =>
                <tr>
    
                    <td>{todo.name}</td>
                    <td>{todo.priority}</td>
                    <td>{todo.content}</td>
                    <td>{todo.createdDate}</td>
                    <td><Button  color="primary" onClick= { () => this.forceUpdate(todo.id)}>Update</Button> </td>
                    <td><Button  color="danger" onClick= { () => this.props.onDelete(this.state.Todos.id)}>Delete</Button></td>
                    
    
    
    
                </tr>)
        return(
            <div>
                <AppNav/>
                <Form className="filter-form">
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type= "name" name="name" id="name" onChange={this.handleChange}></Input>
                        </FormGroup>
                        

                        <FormGroup>
                            <Button color="dark" type="submit">Filter</Button>{' '}
                        </FormGroup>

                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input type= "text" name="date" id="date" onChange={this.handleChange}></Input>
                        </FormGroup>

                        <FormGroup>
                            <Button color="dark" type="submit">Filter</Button>{' '}
                        </FormGroup>

                        <FormGroup>
                            <Label for="priority">Priority</Label>
                            <Input type= "text" name="priority" id="priority" onChange={this.handleChange}></Input>
                        </FormGroup>
                        

                        <FormGroup>
                            <Button color="dark" type="submit">Filter</Button>{' '}
                        </FormGroup>
                        



                        
                    </Form>
                
                
                
                <Container>
                    <h3> Todo List</h3>
                        <Table className='mt-4'>
                            <thead>
                                <tr>
                                <th width="20%">Name</th>
                                <th width="20%">Priority</th>
                                <th width="20%">Content</th>
                                <th width="20%">Date</th>
                                <th width="20%">User</th>
                                <th width="20%">Update</th>
                                <th width="20%">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todoItems}
                            </tbody>


                        </Table>
            

                </Container>
            </div>
        );
    }

    
}
export default TodoList;
