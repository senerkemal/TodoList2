import React, { Component } from 'react';
import AppNav from './AppNav';
import './App.css';
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Login extends Component {
    
    constructor(props){
        super(props)
        this.state= {
            username: '',
            email:'',
            password:'',
            hasLoginFailed: false,
            showSuccessfulMessage: false
        }

        this.handleChange= this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this) 
    }

    componentDidMount(){
        console.log(this.props);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    loginClicked = () => {
        if(this.state.username==='user' && this.state.email==='sk@gmail.com' && this.state.password==='slow')
        {
            //const history = createBrowserHistory();
            this.setState({showSuccessfulMessage: true, hasLoginFailed: false})
            window.location = '/dashboard';
            
            
        }
 
        else{
            
            this.setState({showSuccessfulMessage: false})
            this.setState({hasLoginFailed:true})
        }
            
            
    }



    
    render() { 
  
        const title= <h3 className="text-center">Welcome to Login Page </h3>
        
        

        
        return ( 
            <div>
                <AppNav/>
                <Container>
                    
                    
                    {title}

                    {this.state.hasLoginFailed && <div className="alert alert-danger">Wrong User Name, E-mail or Password</div>}
                    {this.state.showSuccessfulMessage && <div className= "alert alert-warning">Login Successful</div> }

                    
                    <Form className="login-form">
                    
                    <FormGroup>
                        <Label for= "username" >User Name</Label>
                        <Input  type= "text" name="username" id="username" placeholder="User Name" onChange={this.handleChange} value={this.state.username}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for= "email">E-mail</Label>
                        <Input   type= "email" name="email" id="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.email}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for= "password">Password</Label>
                        <Input  type={this.state.showPassword ? 'text': 'password'} name="password" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}></Input>                        
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" onClick={this.loginClicked}>Login</Button>{' '}
                    </FormGroup>
                    
                    </Form>
                    
                </Container>

            </div>
            
            
            
         );


    }



}
export default Login;