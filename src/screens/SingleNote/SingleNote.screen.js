import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ActionTypes } from '../../store/actions/ActionTypes';
import { ChangeTitleModal } from './Modals/ChangeTitle.modal';
import { DeleteNoteModal } from './Modals/DeleteNote.modal';

const styles = StyleSheet.create({
  input: {
    height: '75%',
    margin: 0,
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'rgb(204,204,204)',
  },
});

export const SingleNoteScreen = ({ navigation, route: { params } }) => {
  const [noteContent, setNoteContent] = useState(params?.content);
  const [noteId, setNoteId] = useState(params.id);

  const dispatch = useDispatch();
  const addedNoteId = useSelector(({ appStore: { addedNoteId } }) => addedNoteId);

  useEffect(() => {
    if (params.shouldAddNote && addedNoteId) {
      setNoteId(addedNoteId);
    }
  }, [addedNoteId]);

  const handleOnTextInput = (text) => {
    setNoteContent(text);
  };

  useEffect(() => {
    dispatch({
      type: `notes/${ActionTypes.updateNoteContent}`,
      payload: { id: noteId, content: noteContent },
    });
  }, [noteContent]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <ChangeTitleModal
          {...props}
          title={params.title}
          shouldOpenTitleModal={params.shouldOpenTitleModal}
          noteId={noteId}
          navigation={navigation}
        />
      ),
      headerRight: (props) => <DeleteNoteModal
        {...props}
        navigation={navigation}
        noteId={noteId}
        shouldOpenTitleModal={params.shouldOpenTitleModal}
      />,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <TextInput
        autoFocus={true}
        multiline={true}
        numberOfLines={40}
        style={styles.input}
        onChangeText={handleOnTextInput}
        value={noteContent}
      />
    </SafeAreaView>
  );
};
