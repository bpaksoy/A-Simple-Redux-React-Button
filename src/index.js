import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import incrementAction from "./actions/increment";
import decrementAction from "./actions/decrement";
import Child from "./components/Child";
//console.log(store.getState());

const App = () => {
  return(
    <div className="container">
      <h1>Hello, World!</h1>
      <p>Value: <span>{ store.getState() }</span></p>
      <button onClick={ () => store.dispatch(decrementAction)}>-</button>
      <Child onIncrement={ () => store.dispatch(incrementAction)} onDecrement={ () => store.dispatch(decrementAction)}/>
    </div>
  );
}

const render = () => {
  ReactDOM.render(<App/>, document.getElementById('root'));
}

store.subscribe(render);
render();
