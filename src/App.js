import React, { Fragment, Component } from 'react';
import Stateless from './Stateless';

class App extends Component {
  constructor(foo) {
    super(foo);
    this.name = 'Barry';
    this.state = { value: 0 };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue() {
    this.setState({ value: this.state.value + 132 });
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <h1>Hello, {this.name}</h1>
        <div>top-level also</div>
        <Stateless color="red" name="Benji"></Stateless>
        <button onClick={this.changeValue}>Press Me</button>
        <div>{this.state.value}</div>
      </Fragment>
    );
  }
}

export default App;
