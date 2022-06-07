import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Math.round(Math.random() * 10000),
      title: this.state.input,
      completed: false,
    };
    this.props.addTodo(newTodo);
    this.setState({ input: "" });
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Walk the dog..."
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
          autoFocus
        />
        <button type="submit">Add task</button>
      </form>
    );
  }
}
