import React, { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { deleteNoteModalStyle as styles } from './DeleteNote.modal.style';

export const DeleteNoteModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
              <TouchableOpacity>
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
      <Pressable onPress={() => setIsModalVisible(true)}>
        <Text style={styles.modalOpenButton}>Delete</Text>
      </Pressable>
    </View>
  );
};
