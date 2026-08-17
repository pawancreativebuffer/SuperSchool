import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './global.css';

// Ensure the app takes the full height on web
const appConfig = {
  initialProps: {},
  rootTag: document.getElementById('root'),
};

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, appConfig);
