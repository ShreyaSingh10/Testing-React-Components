import React from 'react';
import Todos from './Todos.js';
import Addtodo from './Addtodo.js';
import './style.css';
import axios from 'axios';

class Container extends React.Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios
      .get('http://api.todo.apathak.com/api/todo')
      .then(response => this.setState({ tasks: response.data }));
  }

  addToDo = todo => {
    this.setState(prevstate => {
      let a = prevstate.tasks;
      a.push(todo);
      return {
        tasks: a
      };
    });
    axios
      .post('http://api.todo.apathak.com/api/todo', {
        name: todo.name,
        description: ''
      })
      .then(() => {
        axios.get('http://api.todo.apathak.com/api/todo').then(response => {
          this.setState({
            tasks: response.data
          });
        });
      });
  };

  deleteToDo = identifier => {
    this.setState(prevstate => {
      let newTasks = prevstate.tasks.filter(t => {
        return t._id !== identifier;
      });
      return {
        tasks: newTasks
      };
    });
    axios
      .delete('http://api.todo.apathak.com/api/todo', {
        data: { id: identifier }
      })
      .then(response => {
        console.log('Deleted Successfully ! ');
      });
  };

  editToDo = (value, place) => {
    const tempState = this.state;
    const tempTask = this.state.tasks[place];
    tempTask.name = value;
    tempState.tasks[place] = tempTask;
    this.setState(tempState);
  };
  render() {
    return (
      <div className="parent_container">
        <h1>
          <font face="Comic sans MS" size="7">
            Todo List
          </font>
        </h1>
        <Addtodo addToDo={this.addToDo} />
        <div className="container">
          <h2>
            <font face="Comic sans MS" size="5">
              Todos{''}
            </font>
          </h2>
          <div className="ancestor">
            <div className="todos-container">
              {this.state.tasks.map(
                (task, place) =>
                  task.visible && (
                    <Todos
                      key={task._id}
                      id={task._id}
                      name={task.name}
                      deleteToDo={this.deleteToDo}
                      editToDo={this.editToDo}
                      place={place}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Container;
