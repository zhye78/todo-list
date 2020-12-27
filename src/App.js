import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3
  state = {
    input: '',
    todos: [
      {id:0, text:'리액트 소개', checked:false},
      {id:1, text:'리액트', checked:true},
      {id:2, text:'hello react', checked:false}
    ]
  }

  handleChange = (e) =>{
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () =>{
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) =>{
    const {todos} = this.state;
    //파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾기
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //선택한 객체
    const nextTodos = [...todos]; //배열복사

    //선택한 객체의 나머지는 그대로 두고, checked만 바꿈
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) =>{
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const {input, todos} = this.state;

    return (
        <TodoListTemplate form={(
          <Form
            value={input}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            onCreate={this.handleCreate}
          />
        )}>
          <TodoItemList todos={todos}
             onToggle={this.handleToggle}
             onRemove={this.handleRemove}/>
        </TodoListTemplate>
    );
  }
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
