import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import SwitchNavigator from './navigation/SwitchNavigation/SwitchNavigator';


const App = () => {

  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
