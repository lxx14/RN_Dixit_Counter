import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from "react-native-modal";
import { styles } from './styles';

class ModalComponent extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View>
        <Modal
          isVisible={this.state.isModalVisible}
          animationInTiming={600}
          animationOutTiming={600}
          backdropOpacity={0.16}
        >
          <View style={styles.container}>
            <Text>Hello!</Text>
            <TouchableWithoutFeedback onPress={this.toggleModal}>
              <Text>Add player</Text>
            </TouchableWithoutFeedback>

          </View>
        </Modal>

        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <FontAwesomeIcon icon={faPlusCircle} size={50} color='#4287f5' />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default ModalComponent;