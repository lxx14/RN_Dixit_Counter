import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../../screens/MainScreen/MainScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import StatisticScreen from '../../screens/StatisticScreen/StatisticScreen';
import { commonNavigationOptions } from './navigationOptions';

const mainFlowCtackNavigator = createStackNavigator(
    {
        Settings: {
            screen: SettingsScreen,
            navigationOptions: () => ({
                ...commonNavigationOptions,
            })
        },
        Main: {
            screen: MainScreen,
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