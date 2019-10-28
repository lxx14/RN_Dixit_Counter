import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, TextInput } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';
import { setEndRoundAction } from '../../screens/MainScreen/actions';
import AppleStyleSwipeableRow from './AppleStyleSwipeableRow';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            totalScore: 0,
            endRound: false
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        if (props.endRound !== state.endRound) {
            state.totalScore += state.score;
            state.score =0;
        }
        return state
    }

    addScore = (value) => {
        const { setEndRoundAction } = this.props;
        setEndRoundAction(false);
        this.setState({ score: this.state.score + value });
    }
    cancelScore = () => {
        this.setState({ score: 0 });
    }

    render() {
        const { id, name } = this.props.data;
        const { score, totalScore } = this.state;
        return (
            <View style={styles.container}>
                <AppleStyleSwipeableRow addScore={this.addScore}>
                    <View style={{ height: 60 }}>
                        <Text>{name}</Text>
                        <Text>Round score: {score} Total score: {totalScore}</Text>
                        {score > 0 && <TouchableWithoutFeedback onPress={this.cancelScore}>
                            <Text>Cancel</Text>
                        </TouchableWithoutFeedback>}
                    </View>
                </AppleStyleSwipeableRow>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    endRound: state.endRound
})

const mapDispatchToProps = {
    setEndRoundAction
}

export default connect(mapStateToProps, mapDispatchToProps)(User);