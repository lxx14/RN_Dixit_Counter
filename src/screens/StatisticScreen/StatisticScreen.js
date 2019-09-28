import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default class StatisticScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Statistic</Text>
            </View>
        );
    }
}

StatisticScreen.navigationOptions = () => {
    return {
        title: 'Statistic',
    }
}