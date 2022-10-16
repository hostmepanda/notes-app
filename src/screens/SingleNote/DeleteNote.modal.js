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
          <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
            <Text
              style={{
                height: '50%',
                textAlign: 'center',
              }}
            >Do you want to delete the note?</Text>
            <View style={{
              width: '80%',
              borderColor: 'rgba(70,70,70,0.26)',
              borderWidth: 0.5,
            }} />
            <View style={{
              paddingTop: 10,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
              <TouchableOpacity>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
              <View style={{
                width: 1,
                borderColor: 'rgba(70,70,70,0.49)',
                borderWidth: 0.5,
              }} />
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Text>Keep it!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <Text style={{ color: 'red' }}>Delete</Text>
      </Pressable>
    </View>
  );
};
