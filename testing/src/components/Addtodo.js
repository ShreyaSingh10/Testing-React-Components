import React from 'react';
import './style.css';

class Addtodo extends React.Component {
  state = {
    name: ''
  };

  handleChange = e => {
    const name = e.target.value;
    this.setState({
      name
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const todo = {
      name: this.state.name,
      visible: true
    };
    this.props.addToDo(todo);
  };

  render() {
    return (
      <div className="addtodo">
        <form onSubmit={this.handleSubmit}>
          <input
            id="add-input"
            onChange={this.handleChange}
            type="text"
            placeholder="Add your task"
          />
          <button type="submit"> Add </button>
        </form>
      </div>
    );
  }
}
export default Addtodo;
