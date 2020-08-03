import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter/index';
import CounterGroup from './components/CounterGroup';

class App extends Component{
  render(){
  return (
    <div className="App">
      <CounterGroup></CounterGroup>
    </div>
  );
}
}
export default App;
