import './App.css';

import { connect } from 'react-redux';

import {
  increaseCounter,
  decreaseCounter
} from './redux/Counter/counter.actions';

function App(props) {
  return (
    <div className="App">
      <div>Count: {props.count}</div>
      <button type="button" onClick={()=>props.increaseCounter()}>Increase</button>
      <button type="button" onClick={()=>props.decreaseCounter()}>Decrease</button>
    </div>
  );
}

const mapStateToProps = state => { 
  return {
    count: state.counter.count
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: ()=>dispatch(increaseCounter()),

    decreaseCounter: ()=>dispatch(decreaseCounter())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
