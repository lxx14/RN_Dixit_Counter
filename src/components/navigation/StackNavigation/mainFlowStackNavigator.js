import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../../screens/MainScreen/MainScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import StatisticScreen from '../../screens/StatisticScreen/StatisticScreen';
import { commonNavigationOptions } from './navigationOptions';

const mainFlowCtackNavigator = createStackNavigator(
    {
        Main: {
            screen: MainScreen,
            navigationOptions: () => ({
                ...commonNavigationOptions,
            })
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: () => ({
                ...commonNavigationOptions,
            })
        },
        Statistic: {
            screen: StatisticScreen,
            navigationOptions: () => ({
                ...commonNavigationOptions,
            })
        },
    }
);

export default createAppContainer(mainFlowCtackNavigator);