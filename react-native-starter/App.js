import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { YellowBox } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);
// YellowBox.ignoreWarnings(['Remote debugger']);

export default createAppContainer(navigator);
