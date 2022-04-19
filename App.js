import React from 'react';
import Navigator from './app/routes/drawer';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

function App() {
    return <Navigator />;
}

export default App;
