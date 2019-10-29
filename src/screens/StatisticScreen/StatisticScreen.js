import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '../../components/header';
import { connect } from 'react-redux';
import { resetPlayersAction } from './actions'

import { styles } from './styles';

class StatisticScreen extends Component {

    closeStatistic = () => {
        const { navigation } = this.props;
        navigation.navigate("Settings");
    }

    render() {
        const { players } = this.props;
        const statisticPlayersArr = [...players];
        statisticPlayersArr.sort((a, b) => { return b.totalScore - a.totalScore });

        return (
            <ScrollView style={styles.container}>
                {statisticPlayersArr.length > 0 && <FlatList
                    data={statisticPlayersArr}
                    renderItem={({ item }) => <Text key={item.id}>{item.name}:   <Text>{item.totalScore}</Text></Text>}
                    keyExtractor={item => item.id.toString()}
                />}
                <Text>Не расстраивайся, {statisticPlayersArr[statisticPlayersArr.length - 1].name}, рано или поздно ты победишь ;)</Text>
                <TouchableOpacity onPress={this.closeStatistic}>
                    <Text>
                        Завершить игру
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

StatisticScreen.navigationOptions = () => {
    return {
        headerTitle: () => <Header title={'Статистика'} />,
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#e3efff',
        },
    }
}



const mapStateToProps = (state) => ({
    players: state.players.players
})

const mapDispatchToProps = {
    resetPlayersAction
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticScreen);