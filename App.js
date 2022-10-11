import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Super Notes App</Text>
      <View style={styles.horizontalLine} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  caption: {
    fontSize: '20px',
  },
  horizontalLine: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
  },
});
