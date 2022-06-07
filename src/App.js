import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    const pendingTodos = this.state.todos.filter(
      (todo) => todo.completed === false
    ).length;
    document.title = `You have ${pendingTodos} pending tasks`;
  }

  componentDidUpdate() {
    const pendingTodos = this.state.todos.filter(
      (todo) => todo.completed === false
    ).length;
    document.title = `You have ${pendingTodos} pending tasks`;
  }

  addTodo(todo) {
    this.setState({ todos: [todo, ...this.state.todos] });
  }

  deleteTodo(id) {
    const todos = [...this.state.todos];
    this.setState({ todos: todos.filter((todo) => todo.id !== id) });
  }

  updateTodo(id) {
    const todos = [...this.state.todos];

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ updatedTodos });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-container">
          <AddTodo addTodo={this.addTodo.bind(this)} />
          <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo.bind(this)}
            updateTodo={this.updateTodo.bind(this)}
          />
        </div>
      </div>
    );
  }
}
