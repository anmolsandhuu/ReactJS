import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
getStyle = () =>{
    return{
        background: '#f4f4f4',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        padding: '10px',
        borderBottom: '1px #ccc dotted'
    }
}

    render() {
        const {id, title } = this.props.todo; 
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
                    X
                </button>
                </p>
            </div>
        )
    }
}




  Todoitem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }
  const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 7px',
      borderRadius: '20%',
      cursor: 'pointer',
      float: 'right'
  }
export default Todoitem
