import React from 'react';
import './style.css';

class Todos extends React.Component {
  state = {
    name: ''
  };

  handleChange = e => {
    const name = e.target.value;
    this.setState({
      name
    });
  };

  componentDidMount() {
    this.setState({
      name: this.props.name
    });
  }

  render() {
    const { name } = this.state;
    const { place, id } = this.props;
    const { editToDo, deleteToDo } = this.props;
    return (
      <div className="todos">
        <input
          type="text"
          value={name}
          onChange={this.handleChange}
          onBlur={() => editToDo(name, place)}
        />
        <button className="cancel" onClick={() => deleteToDo(id)}>
          X
        </button>
      </div>
    );
  }
}
export default Todos;
