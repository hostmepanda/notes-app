import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { NotesContext } from '../../context/NotesContext';

import { styles } from './NotesList.styles';


const NoteItem = ({ title, id, content, handleNotePress }) => {
  return (
    <TouchableOpacity
      style={styles.notesTitleContainer}
      key={id}
      onPress={() => handleNotePress({ content, id, title })}>
      <View style={styles.notesTitleWrapper}>
        <Text style={styles.notesTitle}>{title}</Text>
        <Text>></Text>
      </View>
      <View style={styles.notesHorizonLine} />
    </TouchableOpacity>
  );
};

export const NotesListScreen = ({ navigation }) => {
  const { notes, addNote } = useContext(NotesContext);

  const renderItem = ({ item, handleNotePress }) => {
    return <NoteItem title={item.title} handleNotePress={handleNotePress}/>;
  };

  const handleNotePress = ({ content, id, title, shouldOpenTitleModal = false }) => {
    if (shouldOpenTitleModal) {
      addNote({ content, id, title });
    }
    navigation.navigate(
      'Single note',
      {
        content,
        id,
        shouldOpenTitleModal,
        title,
      },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Super Notes App</Text>
      <View style={styles.horizontalLine} />
      <View style={{ maxHeight: '84%' }}>
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={
            (props) => renderItem({ ...props, handleNotePress })
          }
        />
      </View>
      <StatusBar style="auto"/>
      <View style={styles.addButtonWrapper}>
        <TouchableOpacity
          style={styles.addButtonCircle}
          onPress={() => handleNotePress({
            content: '',
            id: (new Date()).valueOf(),
            title: 'New awesome note',
            shouldOpenTitleModal: true,
          })}
        >
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
