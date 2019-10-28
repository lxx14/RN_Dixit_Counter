import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setEndRoundAction } from './actions';
import User from '../../components/userComponent/user';

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
    }

    endRound = () => {
        const { setEndRoundAction } = this.props;
        this.setState({ round: this.state.round + 1 })
        setEndRoundAction(true);
    }

    render() {
        const { players, round } = this.state;
        return (
            <ScrollView style={styles.container}>
                {players && <FlatList
                    data={players}
                    renderItem={({ item }) => <User key={item.id} data={item} />}
                    keyExtractor={item => item.id.toString()}
                />}
                <Text style={styles.round}>Round: {round}</Text>
                <TouchableWithoutFeedback onPress={this.endRound}>
                    <Text style={styles.button}>End round</Text>
                </TouchableWithoutFeedback>
            </ScrollView>
        );
    }
}

MainScreen.navigationOptions = () => {
    return {
        title: 'Game on!',
        headerLeft: null
    }
}

const mapDispatchToProps = {
    setEndRoundAction
}

export default connect(null, mapDispatchToProps)(MainScreen);