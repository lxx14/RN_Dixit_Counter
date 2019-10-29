import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
            state.score = 0;
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
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{name}</Text>
                        <Text style={styles.roundScoreContainer}>Очки за раунд:   <Text style={styles.roundScore}>{score}</Text></Text>
                        <Text style={styles.totalScoreContainer}>Очки за игру:    <Text style={styles.totalScore}>{totalScore}</Text></Text>
                        {score > 0 && <TouchableOpacity onPress={this.cancelScore}>
                            <Text style={styles.denyScore}>ОТМЕНИТЬ ОЧКИ</Text>
                        </TouchableOpacity>}
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