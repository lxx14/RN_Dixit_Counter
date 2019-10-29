import React, { Component } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from "react-native-modal";
import { setNewPlayerAction } from './actions';
import { styles } from './styles';

class ModalComponent extends Component {
  state = {
    isModalVisible: false,
    value: '',
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  addPlayer = () => {
    const { value } = this.state;
    const { players, setNewPlayerAction } = this.props;

    const newPlayer = {
      id: players.length + 1,
      name: value,
      score: 0,
      totalScore: 0
    };
    value.length > 1 && setNewPlayerAction(newPlayer);
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleInput = (text) => {
    this.setState({ value: text });
  }

  render() {
    return (
      <View style={styles.icon}>
        <Modal
          isVisible={this.state.isModalVisible}
          animationInTiming={600}
          animationOutTiming={600}
          backdropOpacity={0.3}
        >
          <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={this.handleInput} />
            <TouchableOpacity onPress={this.addPlayer}>
              <Text style={styles.button}>Add player</Text>
            </TouchableOpacity>

          </View>
        </Modal>

        <TouchableOpacity onPress={this.toggleModal}>
          <FontAwesomeIcon icon={faPlusCircle} size={50} color='#4287f5' style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.players
})

const mapDispatchToProps = {
  setNewPlayerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);