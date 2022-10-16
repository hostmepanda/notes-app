import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
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
  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <ChangeTitleModal {...props} title={params.title} />,
      headerRight: () => <DeleteNoteModal/>,
    });
  }, [navigation]);

  const [noteText, setNoteText] = React.useState(params?.content);

  return (
    <SafeAreaView>
      <TextInput
        autoFocus={true}
        multiline={true}
        numberOfLines={40}
        style={styles.input}
        onChangeText={setNoteText}
        value={noteText}
      />
    </SafeAreaView>
  );
};
