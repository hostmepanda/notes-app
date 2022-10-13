import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  notesTitle: {
    paddingVertical: 10,
    width: '100%',
  },
  notesTitleWrapper: {
    width: '90%',
    paddingLeft: 20,
    paddingTop: 15,
  },
  notesHorizonLine: {
    borderColor: 'rgba(133,133,133,0.35)',
    borderWidth: 0.5,
    width: '70%',
  },
});
