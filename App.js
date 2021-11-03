import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import DrawerNavigator from './app/navigation/DrawerNavigator';
import mealsReducer from './app/store/reducers/meals';

const rootReducer = combineReducers({
  meals:mealsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <DrawerNavigator/>
    </Provider>  
  );
}
