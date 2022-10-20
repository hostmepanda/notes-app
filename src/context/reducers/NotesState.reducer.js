import { ActionTypes } from '../ActionTypes';

const NOT_FOUND = -1;

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
      const updateNoteIndex = state.notes.findIndex(({ id  }) => id === payload.id);

      if (updateNoteIndex !== NOT_FOUND) {
        const updateNote = state.notes[updateNoteIndex];
        state.notes[updateNoteIndex] = {
          ...updateNote,
          title: payload.title ?? updateNote?.title,
          content: payload.content ?? updateNote?.content,
        };
        return {
          ...state,
          notes: [
            ...state.notes,
          ],
        };
      }
      return state;
    }
    default: return state;
  }
 };