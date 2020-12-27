import React, { Component } from 'react';

class MyName extends Component{
  render(){
    return(
      <div>
        hi my name is <b>{this.props.name}</b>
      </div>
    );
  }
}

MyName.defaultProps = {
  name : '기본이름'
};

export default MyName;
