import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { YellowBox } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import CounterScreenReducer from './src/screens/CounterScreenReducer';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import ValidateScreen from './src/screens/ValidateScreen';
import BoxScreen from './src/screens/BoxScreen';
import LayoutSystems from './src/screens/LayoutSystems';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    CounterReducer: CounterScreenReducer,
    Colors: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Validate: ValidateScreen,
    Box: BoxScreen,
    Layout: LayoutSystems,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);
// YellowBox.ignoreWarnings(['Remote debugger']);

export default createAppContainer(navigator);
