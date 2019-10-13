import React, { Component } from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';


const history = createBrowserHistory();
class App extends Component {
    
    state = {  }
    render() { 
        return (
            
            <Router history={history}>
                <Switch>
                    <Route path= '/' exact={true} component = {Home}/>
                    <Route path='/login' exact= {true} component={Login}/>
                    <Route exact path="/dashboard" component={Dashboard} />
                   

                   
                    
                    
                    
                   

                </Switch>
            </Router>
          );
    }
}
 
export default App;