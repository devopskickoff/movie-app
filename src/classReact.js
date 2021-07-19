import React from 'react';

class classReact extends React.Component {
  //state는 object다 
  state = {
    count:0
  };
  add = () => {
    this.setState(current => ({ count: this.state.count+1 }));
  };
  minus = () => {
    this.setState({ count: this.state.count-1 });
  };
  // react는 class component의 render을 자동적으로 실행한다 return은 필요없다
  render(){
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}



export default classReact;
