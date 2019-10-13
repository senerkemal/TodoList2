import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';



class User extends Component {
    
    constructor(props){
        super(props)
 
        this.state= {
         
         isLoading: false,
         Todos: [],
         Users: []
        
 
     }
    }

    async handleSubmit(event) {
        
    }


    
    
    
    
    async componentDidMount() {
        const response= await fetch('/users');
        const body=  await response.json();
        this.setState({Users: body, isLoading: false});
    }


        
    
    state = { 
        isLoading: true,
        users: []
        
     }

    handleChange
    render() { 
         
            const title =<h3>Add User</h3>
           



            return (
                <div>
                    <AppNav/>
                    <Container>
                        {title}
    
                        <Form onSubmit= {this.handleSubmit}>
                            <FormGroup>
                                <Label for= "username">Username</Label>
                                <Input type= "text" name="username" id="username" onChange={this.handleChange}></Input>
                            </FormGroup>
                        
    
                        
                            <FormGroup>
                                <Label for= "email">E-mail</Label>
                                <Input type= "text" name="email" id="email" onChange={this.handleChange}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for= "password">Password</Label>
                                <Input type= "text" name="password" id="password" onChange={this.handleChange}></Input>
                            </FormGroup>

                            

                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="danger" tag={Link} to='/users' >Cancel</Button>
                            </FormGroup>


                        </Form>
                    </Container>
                    {''}

                    
                </div>
                         );
    }
}
 
export default User;