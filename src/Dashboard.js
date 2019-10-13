import React, { Component } from 'react';
import AppNav from './AppNav';
import { Table, Container, ButtonToolbar } from 'reactstrap';
import Axios from 'axios';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';



class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            todos: [],
            todo: {},
            addModalShow: false,
            name: [],
            id: 0,
        };
    }

    componentDidMount() {
        Axios.get(`http://localhost:8080/api/user/1/todos`).then(res => {
            console.log(res);
            this.setState({ todos: res.data });
        });
    }



    render() {

        let rows = this.state.todos.map(todo =>
            (<tr key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.priority}</td>
                <td>{todo.content}</td>
                <td>{todo.createdDate}</td>
                <td>
                    <ButtonToolbar>
                        <UpdateTodo todo={todo} />
                    </ButtonToolbar>
                </td>
                <td>
                    <ButtonToolbar>
                        <DeleteTodo todo={todo}/>
                    </ButtonToolbar>
                </td>
            </tr>));

        return (
            <div>
                <AppNav />
                <Container>
                    <h3> Todo List</h3>
                    
                        
                        <AddTodo show={this.state.addModalShow} />
                   
                    <Table className='mt-4'>
                        <thead>
                            <tr>
                                <th width="30%">Name</th>
                                <th width="30%">Priority</th>
                                <th width="20%">Content</th>
                                <th width="20%">Date</th>
                                <th width="10%">Action</th>
                                <th width="10%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>

                    </Table>



                </Container>


            </div>

        );
    }
}

export default Dashboard;