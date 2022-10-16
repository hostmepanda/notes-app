import { StyleSheet } from 'react-native';

export const ChangeTitleModalStyle = StyleSheet.create({
  modalContainer: { width: '80%' },
  modalFrame: {
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    width: 200,
    height: 125,
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
  modalOpenButton: { fontWeight: 'bold' },
  modalOpenButtonWrapper: {
    height: 40,
    paddingRight: 10,
    marginLeft: -30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooter: {
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modalFooterLeftButton: { color: 'blue' },
  modalFooterRightButton: {
    width: 1,
    borderColor: 'rgba(70,70,70,0.49)',
    borderWidth: 0.5,
  },
  modalText: {
    padding: 10,
  },
  modalTextInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '95%',
    height: 30,
    paddingLeft: 10,
    paddingRight: 5,
  },
  modalTextWrapper: {
    padding: 10,
    paddingTop: 0,
    width: '100%',
  },
});
