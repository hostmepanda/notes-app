import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { ChangeTitleModalStyle as styles } from './ChangeTitle.modal.style';

export const ChangeTitleModal = (props) => {
  const { title } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(title);
  const [noteTitle, setNoteTitle] = useState(title);

  const saveOnPressHandler = () => {
    setNoteTitle(modalTitle);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalFrame}>
          <View style={styles.modalBody}>
            <View style={styles.modalTextWrapper}>
              <Text style={styles.modalText}>Enter title of the note</Text>
              <TextInput
                style={styles.modalTextInput}
                value={modalTitle}
                onChangeText={setModalTitle}
              />
            </View>
            <View style={styles.modalBodyHorizontalLine} />
            <View style={styles.modalFooter}>
              <TouchableOpacity onPress={saveOnPressHandler}>
                <Text style={styles.modalFooterLeftButton}>Save</Text>
              </TouchableOpacity>
              <View style={styles.modalFooterRightButton} />
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.modalOpenButtonWrapper}
        onPress={() => setIsModalVisible(true)}>
        <Text style={styles.modalOpenButton}>{noteTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
