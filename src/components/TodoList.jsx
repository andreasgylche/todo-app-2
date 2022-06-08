import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export default class TodoList extends Component {
  render() {
    if (!this.props.todos.length > 0) {
      return (
        <ul className="todo-list">
          <li>You have no tasks.</li>
        </ul>
      );
    }

    return (
      <ul className="todo-list">
        {this.props.todos.map((todo) => (
          <li key={todo.id} className="task">
            <span
              className={todo.completed ? "completed" : null}
              onDoubleClick={() => this.props.updateTodo(todo.id)}
            >
              {todo.title}
            </span>
            <FaTrash onClick={() => this.props.deleteTodo(todo.id)} />
          </li>
        ))}
      </ul>
    );
  }
}
