import React, { useReducer } from 'react';

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
      ]});

  return (
    <NotesContext.Provider value={{
      notes: state.notes,
    }}>
      {children}
    </NotesContext.Provider>
  );
};