import React, { Component } from 'react';

import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
    constructor(props) {
      super(props);
      //states expected to be an object
        this.state = {

          todos: [
          { description: 'Walk the cat', isCompleted: true },
          { description: 'Throw the dishes away', isCompleted: false },
          { description: 'Buy new dishes', isCompleted: false }
        ],
        newTodoDescription: ''
      };
    }

handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription){ return }
  const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
  this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: "" });
}

toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState( {todos: todos } );
}

deleteTodo(e) {
   /*
   const list = this.state.todos;
   const newTodoList = list.splice(list.length-1, list.length);
   this.setState({ newTodoList: newTodoList});
    */

   //what do you have to do different when making new array? (filter)
   const list = this.state.todos.slice();
   console.log("list" + list);
   const shortList = [];
   //const index = list[item];
   for(let index = 0; index < list.length; index++){

     console.log(list[index]);
     if(list[index] === false){
         console.log(shortList.append(list[index]));
     }

   }

console.log("print true items: " + shortList );





}

handleChange(e) {
  this.setState({ newTodoDescription: e.target.value })
}

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description }
                                isCompleted={ todo.isCompleted } toggleComplete={
                                  () => this.toggleComplete(index)
                                } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
            <input type="text" value={ this.state.newTodoDescription }
                              onChange ={ (e) => this.handleChange(e)}/>
            <input type="submit" />

            <input type="button" value="Remove"
                              onClick ={ (e) => this.deleteTodo(e)}/>
        </form>
      </div>
    );
  }
}

export default App;
