import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  {todos} from './todos.json';
import TodoForm from './components/TodoForm';

console.log(todos)

//Class Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    if (window.confirm("Are you sure want delete it?")) {
      this.setState({
        todos: this.state.todos.filter((item, i) => {
          return i !== index
        })
      })
    }
  }
  render () {
    const TodosRender = this.state.todos.map((todo, i)=> {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>  
        </div>
      )
    });
  
    return (
      <div className="App">   
        <nav className= "navbar nav-dark bg-dark">
          <a href="" className="text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>                   
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} className="App-logo" alt="logo" /> 
              <TodoForm onAddSubmit={this.handleAddTodo}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                {TodosRender}
              </div>
            </div> 
          </div>          
        </div>        
      </div>
    )
  }
}

export default App;
