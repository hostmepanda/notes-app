import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './NoesList.styles';

// TODO: replace with data fetched from DB
const notes = [
  {
    id: 1,
    title: 'Very long title of a note',
    content: 'some content of the note one and it seems it\'s big',
  },
  {
    id: 2,
    title: 'title two',
    content: 'some content of the note',
  },
  {
    id: 3,
    title: 'title three',
    content: 'some content of the note',
  },
];

export const NotesListScreen = ({ navigation }) => {
  const handleNotePress = ({ content, id, title, }) => {
    navigation.navigate(
      'Single note',
      {
        content,
        id,
        title,
      },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Super Notes App</Text>
      <View style={styles.horizontalLine} />
      {notes.length && notes.map(({ content, id, title }) =>
        (<TouchableOpacity
          style={styles.notesTitleContainer}
          key={id}
          onPress={() => handleNotePress({ content, id, title })}>
          <View style={styles.notesTitleWrapper}>
            <Text style={styles.notesTitle}>{title}</Text>
            <Text>></Text>
          </View>
          <View style={styles.notesHorizonLine} />
        </TouchableOpacity>)
      )}
      <StatusBar style="auto"/>
      <View style={styles.addButtonWrapper}>
        <TouchableOpacity style={styles.addButtonCircle}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
