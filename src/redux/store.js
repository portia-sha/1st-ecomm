import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Setting up middleware: Store expect to be an array
const middlewares = [logger];

// rootReducer as pass-in vlue and appMiddleware function as a return value: means that each element in logger array will pass into appMiddleware function
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// return a persist version of store
export const persistor = persistStore(store);

// export default { store, persistor };
