import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

// Setting up middleware: Store expect to be an array
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// rootReducer as pass-in vlue and appMiddleware function as a return value: means that each element in logger array will pass into appMiddleware function
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// run and add the individual saga
sagaMiddleware.run(rootSaga);

// return a persist version of store
export const persistor = persistStore(store);

// export default { store, persistor };
