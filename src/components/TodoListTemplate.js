import React, {Component} from 'react';
import './TodoListTemplate.css';

class TodoListTemplate extends Component{
  render(){
    const {form, children} = this.props;
    //console.log(children);
    return (
      <main className="todo-list-template">
        <div className="title">
          오늘 할 일
        </div>
        <section className="form-wrapper">
          {form}
        </section>
        <section className="todos-wrapper">
          {children}
        </section>
      </main>
    );
  }
}

export default TodoListTemplate;
