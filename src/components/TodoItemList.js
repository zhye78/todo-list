import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
  //컴포넌트가 리렌더링 할지말지 결정하는 메소드
  //todos값이 바뀔때만 리렌더링 하게 설정
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render(){
    const {todos, onToggle, onRemove} = this.props;

    const todoList = todos.map(
      ({id, text, checked}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
