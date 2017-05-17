import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import allReducers from './reducers';
import createLogger from 'redux-logger';



const logger = createLogger({
  // ...options
});

const enhancer = compose(  
  applyMiddleware(thunk,promise,logger)  
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let Store = createStore(allReducers,enhancer); 


export default Store;  