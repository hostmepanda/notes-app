import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, View, Button } from 'react-native';
import { DeleteModal } from './Delete.modal';

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
      title: params.title,
      headerRight: () => (
        <DeleteModal/>
      ),
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
