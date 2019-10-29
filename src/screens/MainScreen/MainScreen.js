import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setEndRoundAction } from './actions';
import User from '../../components/userComponent/user';
import { Header } from '../../components/header';
import { styles } from './styles';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            round: 1,
        }
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        const players = navigation.getParam("players");
        this.setState({ players });
        console.log('players main screen----->', players)
    }

    endRound = () => {
        const { setEndRoundAction } = this.props;
        this.setState({ round: this.state.round + 1 })
        setEndRoundAction(true);
    }

    endGame = () => {
        console.log('end game!')
    }

    render() {
        const { players, round } = this.state;
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.round}>Раунд: {round}</Text>
                {players && <FlatList
                    data={players}
                    renderItem={({ item }) => <User key={item.id} data={item} />}
                    keyExtractor={item => item.id.toString()}
                />}
                <TouchableOpacity onPress={this.endRound}>
                    <Text style={styles.button}>Конец раунда</Text>
                </TouchableOpacity>
                {round > 1 && <TouchableOpacity onPress={this.endGame}>
                    <Text style={styles.buttonEndGame}>Закончить игру</Text>
                </TouchableOpacity>}
            </ScrollView>
        );
    }
}

MainScreen.navigationOptions = () => {
    return {
        headerTitle: () => <Header title={'Играем!'} />,
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#e3efff',
        },
    }
}

const mapDispatchToProps = {
    setEndRoundAction
}

export default connect(null, mapDispatchToProps)(MainScreen);