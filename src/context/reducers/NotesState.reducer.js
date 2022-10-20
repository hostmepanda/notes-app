import { ActionTypes } from '../ActionTypes';

export const NotesStateReducer = (state, { type, payload }) => {
  if (!payload?.id) {
    return state;
  }

  switch (type) {
    case ActionTypes.addNote: {
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: payload?.id ?? (new Date()).valueOf(),
            title: payload?.title ?? 'New amazing note',
            content: payload?.content ?? '',
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
      const untouchedNote = state.notes.filter(note => note.id !== payload.id) || [];
      const updateNote = state.notes.find(({ id, title, content }) => id === payload.id);
      if (updateNote) {
        return {
          ...state,
          notes: [
            ...untouchedNote,
            {
              ...updateNote,
              title: payload.title ?? updateNote?.title,
              content: payload.content ?? updateNote?.content,
            }
          ],
        };
      }
      return state;
    }
    default: return state;
  }
 };