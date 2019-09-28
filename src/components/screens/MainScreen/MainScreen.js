import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main</Text>
            </View>
        );
    }
}