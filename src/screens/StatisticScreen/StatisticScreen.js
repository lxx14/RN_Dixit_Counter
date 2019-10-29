import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../components/header';
import { connect } from 'react-redux';

import { styles } from './styles';

class StatisticScreen extends Component {
    render() {
        const {players} = this.props;
        console.log('statistic----------->', players);
        return (
            <View style={styles.container}>
                <Text>Statistic</Text>
            </View>
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
    players: state.players
})

export default connect(mapStateToProps, null)(StatisticScreen);