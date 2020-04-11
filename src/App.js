import React, { Component } from "react";
import NavBar from "./components/navcomponent/NavBar";
import CardList from "./components/cardlistcomponent/CardList";
import Form from "./components/FormComponent/Form";
import TodoTable from "./components/TodoComponent/TodoTable";
import Footer from "./components/FooterComponent/Footer";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      isComplete: false,
      date: Date.now()
    };
    

    this.setState({ todos: [ newTodo,...this.state.todos] });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  updateTodo = (id, text) => {
    console.log(text);
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = text;
        }
        return todo;
      })
    });
  };

  completeTodo = (id, value, title) => {
    if (value === 1) {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }

          return todo;
        })
      });
    } else if (value === 2) {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            console.log(value);
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        })
      });
    } else {
      console.log(value);
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        })
      });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <CardList todos={this.state.todos} />
        <Form addTodo={this.addTodo} />
        <TodoTable
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
          updateTodo={this.updateTodo}
        />
        {/* <Rating/> */}
        <Footer />
      </div>
    );
  }
}
export default App;
