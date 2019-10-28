import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import ModalComponent from '../../components/modal/modal';

import { styles } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class SettingsScreen extends Component {
    constructor(props) {
        super(props);

    }
    onStartGame = () => {
        const { navigation, players } = this.props
        navigation.navigate("Main", { players: players })
    }

    render() {
        const { players } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    {players && <FlatList
                        data={players}
                        renderItem={({ item }) => <Text key={item.id} style={styles.text}>{item.name}</Text>}
                        keyExtractor={item => item.id.toString()}
                    />}
                    {players.length < 3 ?
                        <Text style={styles.hint}>Add at least 3 players</Text> :
                        <TouchableWithoutFeedback onPress={this.onStartGame}>
                            <Text style={styles.button}>Start Game</Text>
                        </TouchableWithoutFeedback>}
                </ScrollView>
                <ModalComponent />
            </View>
        );
    }
}

SettingsScreen.navigationOptions = () => {
    return {
        title: 'Settings',
    }
}

const mapStateToProps = (state) => ({
    players: state.players.players
});

export default connect(mapStateToProps)(SettingsScreen)