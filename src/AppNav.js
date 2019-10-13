import React, { Component } from 'react';
import {Nav, Navbar,NavbarBrand, NavItem, NavLink} from 'reactstrap';



class AppNav extends Component {
    state = {  }
    render() {
        return (
          <div>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">Todo List Application</NavbarBrand>
              
              
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>



                  

                  
                </Nav>
              
            </Navbar>


      

      
          </div>
        );
      }
}
 
export default AppNav;