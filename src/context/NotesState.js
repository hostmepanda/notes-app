import React, { useReducer } from 'react';
import { ActionTypes } from './ActionTypes';

import { NotesContext } from './NotesContext';
import { NotesStateReducer } from './reducers/NotesState.reducer';

export const NotesState = ({ children }) => {
  const [state, dispatch] = useReducer(NotesStateReducer, { notes:
      [
        {
          id: 1,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 17,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 16,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 15,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 14,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 13,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 12,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 11,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 21,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 111,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 114,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 115,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 116,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 117,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
        {
          id: 118,
          title: 'Very long title of a note',
          content: 'some content of the note one and it seems it\'s big',
        },
      ]});

  const addNote = (props) => dispatch({
    type: ActionTypes.addNote,
    payload: {
      id: props.id ?? (new Date()).valueOf(),
      title: props.title,
      content: props.content,
    },
  });

  const deleteNote = noteId => dispatch({
    type: ActionTypes.removeNote,
    payload: { id: noteId },
  });

  const updateNote = ({ id, content, title }) => dispatch({
    type: ActionTypes.updateNote,
    payload: { id, content, title },
  });

  return (
    <NotesContext.Provider value={{
      notes: state.notes,
      addNote,
      deleteNote,
      updateNote,
    }}>
      {children}
    </NotesContext.Provider>
  );
};