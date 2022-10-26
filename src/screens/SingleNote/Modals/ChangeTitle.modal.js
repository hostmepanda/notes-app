import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../../store/actions/ActionTypes';

import { ChangeTitleModalStyle as styles } from './ChangeTitle.modal.style';

export const ChangeTitleModal = (props) => {
  const { title = 'New awesome note', shouldOpenTitleModal, noteId } = props;
  const [isModalVisible, setIsModalVisible] = useState(shouldOpenTitleModal ?? false);
  const [modalTitle, setModalTitle] = useState(title);
  const [noteTitle, setNoteTitle] = useState(title);

  const dispatch = useDispatch();
  const addedNoteId = useSelector(({ appStore: { addedNoteId } }) => addedNoteId);

  const id = addedNoteId ?? noteId;

  const saveOnPressHandler = () => {
    setNoteTitle(modalTitle);
    setIsModalVisible(false);
    dispatch({
      type: `notes/${ActionTypes.updateNoteTitle}`,
      payload: { id, title: modalTitle },
    })
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
                autoFocus={true}
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
