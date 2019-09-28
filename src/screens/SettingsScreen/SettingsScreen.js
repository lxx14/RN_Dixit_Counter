import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import ModalComponent from '../../components/modal/modal';

import { styles } from './styles';

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
        }
    }
    componentDidMount() {
        const { players } = this.props;
        this.setState({ players: players })
    }

    render() {
        const { players } = this.state;
        console.log(players);

        return (
            <View style={styles.container}>
                <Text>Test</Text>
                <Text>Test</Text>
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
    players: state.players
});

export default connect(mapStateToProps)(SettingsScreen)