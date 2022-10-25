import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
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
  const [noteText, setNoteText] = React.useState(params?.content);
  const dispatch = useDispatch();

  const handleOnTextInput = (text) => {
    setNoteText(text);
  };

  useEffect(() => {
    dispatch({
      type: `notes/${ActionTypes.updateNoteContent}`,
      payload: { id: params.id, content: noteText },
    });
  }, [noteText]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <ChangeTitleModal
          {...props}
          title={params.title}
          shouldOpenTitleModal={params.shouldOpenTitleModal}
          noteId={params.id}
          navigation={navigation}
        />
      ),
      headerRight: (props) => <DeleteNoteModal
        {...props}
        navigation={navigation}
        noteId={params.id}
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
        value={noteText}
      />
    </SafeAreaView>
  );
};
