import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
