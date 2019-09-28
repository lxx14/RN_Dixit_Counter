import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';


import { styles } from './styles';

export default class MainScreen extends Component {
    render() {

        return (
            <View style={styles.container}>

            </View>
        );
    }
}

MainScreen.navigationOptions = () => {
    return {
        title: 'Game on!',
    }
}