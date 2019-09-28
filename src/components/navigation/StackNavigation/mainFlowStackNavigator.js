import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../../screens/MainScreen/MainScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import StatisticScreen from '../../screens/StatisticScreen/StatisticScreen';

const mainFlowCtackNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Settings: SettingsScreen,
        Statistic: StatisticScreen,
    }
);

export default createAppContainer(mainFlowCtackNavigator);