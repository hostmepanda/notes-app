import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

import { DatabaseStore } from '../databaseStore';
import { ActionTypes } from '../actions/ActionTypes';

const actionHandlers = {
  [ActionTypes.addNote]: async (state, payload) => {
    const addedNote = {
      title: payload?.title ?? 'New amazing note',
      content: payload?.content ?? '',
    };
    const { id: addedNoteId } = await DatabaseStore.createNote(addedNote);
    return {
      ...state,
      notes: [{
        ...state.notes,
        ...addedNote,
        id: addedNoteId,
      }],
    };
  },
  loadNotes: async (state) => {
    try {
      const allNotes = await DatabaseStore.getNotes();
      return { ...state, notes: allNotes };
    } catch (error) {
      console.log('Error while loading notes:', error);
      return state;
    }
  },
  [ActionTypes.loadedNotes]: async (state, payload) => {
    return {
      ...state,
      notes: payload?.notes ?? [],
    };
  },
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
  },
});

export default NotesSlice.reducer;
