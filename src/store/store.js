import { createStore, applyMiddleware } from 'redux';
import { rootReducer, rootEpic } from './reducers';
import { createEpicMiddleware } from 'redux-observable'

const initialState = {};

const epicMiddleware = createEpicMiddleware();

// export const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middleware)
// );

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  )
  
  epicMiddleware.run(rootEpic)

  return store;
}