import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  addButtonWrapper: {
    display: 'flex',
    position: 'absolute',
    bottom: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    fontSize: '70px',
    color: '#5a2a81',
    top: -25,
    height: 100,
  },
  addButtonCircle: {
    display: 'flex',
    alignItems: '',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: '100',
    borderColor: '#5a2a81',
    height: 50,
    width: 50,
  },
  caption: {
    fontSize: '20px',
  },
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  horizontalLine: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Super Notes App</Text>
      <View style={styles.horizontalLine} />
      <StatusBar style="auto"/>
      <View style={styles.addButtonWrapper}>
        <TouchableOpacity style={styles.addButtonCircle}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

