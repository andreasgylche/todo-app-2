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

    if (this.state.input === "") {
      alert("Please fill out the input field before adding a todo.");
      return;
    }

    const newTodo = {
      id: Math.round(Math.random() * 10000),
      title: this.state.input,
      completed: false,
    };
    this.props.addTodo(newTodo);
    this.setState({ input: "" });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Walk the dog..."
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
          autoFocus
        />
        <button type="submit">Add task</button>
      </form>
    );
  }
}
