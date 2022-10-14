import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, View } from 'react-native';

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

export const SingleNoteScreen = ({  route: { params } }) => {
  const [text, setText] = React.useState(undefined);

  return (
    <SafeAreaView>
      <TextInput
        autoFocus={true}
        multiline={true}
        numberOfLines={40}
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
    </SafeAreaView>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>{params.content}</Text>
    </View>
  );
};
