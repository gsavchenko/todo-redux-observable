import { createStore, /*compose, applyMiddleware*/ } from 'redux';
import { rootReducer, /*rootEpic*/ } from './reducers';
// import { createEpicMiddleware } from 'redux-observable'

// const epicMiddleware = createEpicMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    // composeEnhancers(
    //   applyMiddleware(epicMiddleware)
    // )
  )
  
  // epicMiddleware.run(rootEpic);

  return store;
}