import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { ActionTypes } from '../../store/actions/ActionTypes';
import { fetchNotes } from '../../store/slices/notesSlice';

import { styles } from './NotesList.styles';

const NoteItem = ({ title, id, content, handleNotePress }) => {
  return (
    <TouchableOpacity
      style={styles.notesTitleContainer}
      key={id}
      onPress={() => handleNotePress({ content, id, title })}>
      <View style={styles.notesTitleWrapper}>
        <View style={styles.notesTitle}>
          <Text style={styles.notesTitleText}>{title}</Text>
          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.notesHorizonLine} />
    </TouchableOpacity>
  );
};

export const NotesListScreen = ({ navigation }) => {
  const notes = useSelector(({ appStore: { notes } }) => notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [notes]);

  const renderItem = ({ item, handleNotePress }) => {
    return <NoteItem
      title={item.title}
      id={item.id}
      content={item.content}
      handleNotePress={handleNotePress}
    />;
  };

  const handleNotePress = ({ content, id, title, shouldOpenTitleModal = false }) => {
    if (shouldOpenTitleModal) {
      dispatch({
        type: `notes/${ActionTypes.addNote}`,
        payload: { content, id, title },
      });
    }
    navigation.navigate(
      'Single note',
      { content, id, shouldOpenTitleModal, title },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Super Notes App</Text>
      <View style={styles.horizontalLine} />
      <View style={styles.notesListWrapper}>
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
