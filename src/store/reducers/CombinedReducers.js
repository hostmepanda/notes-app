import { combineReducers } from 'redux'

import NotesSlice from '../slices/notesSlice'

const combinedReducers = combineReducers({
  appStore: NotesSlice,
})

export default combinedReducers