import { ActionTypes } from '../ActionTypes';

export const NotesStateReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.addNote: {
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: (new Date()).valueOf(),
            title: 'New amazing note',
            content: '',
          },
        ],
      };
    }
    case ActionTypes.removeNote: {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== payload.id),
      };
    }
    case ActionTypes.updateNote: {
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            ...state.notes.find(({ id }) => id === payload.id),
            title: payload.title,
            content: payload.content,
          }
        ],
      };
    }
    default: return state;
  }
 };