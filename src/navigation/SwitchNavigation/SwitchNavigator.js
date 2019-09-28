import { createAppContainer, createSwitchNavigator  } from 'react-navigation';

import mainFlowStackNavigator from '../StackNavigation/mainFlowStackNavigator';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';


const SwitchNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        MainFlow: mainFlowStackNavigator
    },
    {
        initialRouteName: 'Splash',
    }
);

export default createAppContainer(SwitchNavigator);