import React, {Component} from 'react';
import './App.css';
import CounterGroupContainer from './containers/CounterGroupContainer';

class App extends Component{
  render(){
  return (
    <div className="App">
      <CounterGroupContainer></CounterGroupContainer>
    </div>
  );
}
}
export default App;
