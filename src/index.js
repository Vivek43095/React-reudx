import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers,createStore } from 'redux';
import { Provider } from 'react-redux';
import { dislikeReducer } from './Reducers/DislikeReducer';
import { likeReducer } from './Reducers/LikeReducer';
//import * as serviceWorker from './serviceWorker'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const mainReducer = combineReducers({
  //we gotta define a top-level state variable name handled by both reducers
  like:likeReducer,
  dislike:dislikeReducer
})

let globalStore = createStore(mainReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={globalStore}>
    <App />
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
