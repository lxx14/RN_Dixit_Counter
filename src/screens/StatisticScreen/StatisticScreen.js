import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '../../components/header';
import { connect } from 'react-redux';

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
                    renderItem={({ item }) => <Text key={item.id} style={styles.text}>{item.name}:   <Text style={styles.score}>{item.totalScore}</Text></Text>}
                    keyExtractor={item => item.id.toString()}
                />}
                <Text style={styles.phrase}>Не расстраивайся, <Text style={styles.textL}>{statisticPlayersArr[statisticPlayersArr.length - 1].name}</Text>, рано или поздно ты победишь ;)</Text>
                <TouchableOpacity onPress={this.closeStatistic}>
                    <Text style={styles.button}>
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


export default connect(mapStateToProps, null)(StatisticScreen);