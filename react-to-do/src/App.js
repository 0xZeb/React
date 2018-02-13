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

   //Hoist copy of state, array
   var tempState = this.state;
   var filtered = [];

   //loop through elements in todo list, checking for completion
   for(let i = 0; i < tempState.todos.length; i++){
      if( tempState.todos[i].isCompleted === false){

           //Incomplete items pushed to new list
           filtered.push( tempState.todos[i] );
      }
   }


   //at this point, you could log the original state and the filtered array and see
   // that state is unchanged however the copy has been filtered.

  //setState to re-render new list of todos to view
  this.setState({ todos : filtered });

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
