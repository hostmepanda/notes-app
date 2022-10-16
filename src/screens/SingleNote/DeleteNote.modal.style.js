import { StyleSheet } from 'react-native';

export const deleteNoteModalStyle = StyleSheet.create({
  modalFrame: {
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    width: 200,
    height: 100,
    alignSelf: 'center',
    top: '50%',
    marginTop: -100,
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  modalBodyHorizontalLine: {
    width: '80%',
    borderColor: 'rgba(70,70,70,0.26)',
    borderWidth: 0.5,
  },
  modalOpenButton: { color: 'red' },
  modalFooter: {
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modalFooterLeftButton: { color: 'red' },
  modalFooterRightButton: {
    width: 1,
    borderColor: 'rgba(70,70,70,0.49)',
    borderWidth: 0.5,
  },
  modalText: {
    height: '50%',
    textAlign: 'center',
  },
});
