import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Header } from '../../components/header'
import ModalComponent from '../../components/modal/modal';

import { styles } from './styles';

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
                        <Text style={styles.hint}>Для игры нужно минимум 3 игрока</Text> :
                        <TouchableOpacity onPress={this.onStartGame}>
                            <Text style={styles.button}>Начать игру</Text>
                        </TouchableOpacity>}
                </ScrollView>
                <ModalComponent />
            </View>
        );
    }
}

SettingsScreen.navigationOptions = () => {
    return {
        headerTitle: () => <Header title={'Настройки игроков'} />,
        headerStyle: {
            backgroundColor: '#e3efff',
        },
    }
}

const mapStateToProps = (state) => ({
    players: state.players.players
});

export default connect(mapStateToProps)(SettingsScreen)