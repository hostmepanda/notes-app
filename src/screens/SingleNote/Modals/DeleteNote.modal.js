import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../store/actions/ActionTypes';

import { deleteNoteModalStyle as styles } from './DeleteNote.modal.style';

export const DeleteNoteModal = ({ navigation, noteId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const dispatch = useDispatch();

  const deleteNoteHandler = () => {
    setIsModalVisible(false);
    dispatch({
      type: `notes/${ActionTypes.removeNote}`,
      payload: { id: noteId },
    });
    setIsDeleted(true);
  };

  useEffect(() => {
    if (isDeleted) {
      navigation.goBack();
    }
  }, [isDeleted]);

  return (
    <View>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalFrame}>
          <View style={styles.modalBody}>
            <Text style={styles.modalText}>Do you want to delete the note?</Text>
            <View style={styles.modalBodyHorizontalLine} />
            <View style={styles.modalFooter}>
              <TouchableOpacity onPress={deleteNoteHandler}>
                <Text style={styles.modalFooterLeftButton}>Delete</Text>
              </TouchableOpacity>
              <View style={styles.modalFooterRightButton} />
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text>Keep it!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Text style={styles.modalOpenButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
