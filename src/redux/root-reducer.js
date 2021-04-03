// basic reducer object that store everything we need in state
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// means we need local storage as our local storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  // Store the string name from reducer that we wanna store
  whitelist: [],
};

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
