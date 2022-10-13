import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './NoesList.styles';

// TODO: replace with data fetched from DB
const notes = [
  {
    id: 1,
    title: 'Very long title of a note',
    content: 'some content of the note',
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

export const NotesListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Super Notes App</Text>
      <View style={styles.horizontalLine} />
      {notes.length && notes.map(({ id, title }) =>
        (<TouchableOpacity style={styles.notesTitleWrapper} key={id}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
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
