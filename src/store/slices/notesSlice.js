import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

import { DatabaseStore } from '../databaseStore';
import { ActionTypes } from '../actions/ActionTypes';

const actionHandlers = {
  [ActionTypes.removeNote]: async (state, { payload: { id } }) => {
    try {
      await DatabaseStore.deleteNote({ id });
      return state;
    } catch (error) {
      console.log('Error while deleting note:', error);
      return state;
    }
  },
  [ActionTypes.updateNoteTitle]: async (state, { payload: { id, title } }) => {
    try {
      await DatabaseStore.updateNoteTitle({ id, title });
    } catch (error) {
      console.error('Error happened while updating note\'s content', error);
    }

    return { ...state };
  },
  [ActionTypes.updateNoteContent]: async (state, { payload: { id, content } }) => {
    try {
      await DatabaseStore.updateNoteContent({ id, content });
    } catch (error) {
      console.error('Error happened while updating note\'s content', error);
    }

    return { ...state };
  },
};

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  return await DatabaseStore.getNotes();
})

export const createNote = createAsyncThunk(
  'notes/createNote',
  async ({ content, title }) => {
    return await DatabaseStore.createNote({ content, title });
  });

const NotesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: actionHandlers,
  extraReducers: builder => {
    builder
      .addCase(fetchNotes.fulfilled, (state, { payload })=> {
        return {
          ...state,
          notes: payload,
        };
      })
      .addCase(createNote.fulfilled, (state, { payload: { id: addedNoteId } }) => {
        return {
          ...state,
          addedNoteId,
        };
      })
  },
});

export default NotesSlice.reducer;
