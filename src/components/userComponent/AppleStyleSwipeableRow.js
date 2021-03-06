import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { styles } from './styles';

export default class AppleStyleSwipeableRow extends Component {

    renderRightAction = (text, color, x, progress) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });
        const pressHandler = () => {
            const { addScore } = this.props;
            addScore(text);
            this.close();
        };
        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color, height: 60, }]}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };
    renderRightActions = progress => (
        <View style={{ width: '100%', height: 100, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
            {this.renderRightAction(1, '#C8C7CD', 384, progress)}
            {this.renderRightAction(2, '#ffab00', 329, progress)}
            {this.renderRightAction(3, '#dd2c00', 274, progress)}
            {this.renderRightAction(4, '#00ccc6', 219, progress)}
            {this.renderRightAction(5, '#03fc31', 164, progress)}
            {this.renderRightAction(6, '#c203fc', 109, progress)}
            {this.renderRightAction(7, '#031cfc', 54, progress)}
        </View>
    );
    updateRef = ref => {
        this._swipeableRow = ref;
    };
    close = () => {
        this._swipeableRow.close();
    };
    render() {
        const { children } = this.props;
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                leftThreshold={30}
                rightThreshold={40}
                renderRightActions={this.renderRightActions}>
                {children}
            </Swipeable>
        );
    }
}
