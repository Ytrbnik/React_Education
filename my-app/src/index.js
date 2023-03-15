import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello Word!</h2>;
// const elem = React.createElement('h2', {className: 'greeti ngs'}, 'Hello World!');

const text = 'Hello World!'

const elem = (
    <div>
      <h2 className='Text'>Текст: {text}</h2>
      <input type="text" />
      <label htmlFor=""></label>
      <button tabIndex={0}>Click</button>
      <button/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
  elem,
);


