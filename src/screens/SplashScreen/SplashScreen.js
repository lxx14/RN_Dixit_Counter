import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default class SplashScreen extends Component {

    componentDidMount() {

        setTimeout(
            this.goMainPage, 2000
        )
    }

    goMainPage = () => {
        const { navigation: { navigate } } = this.props;

        navigate('MainFlow');
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>DIXIT COUNTER</Text>
            </View>
        );
    }
}