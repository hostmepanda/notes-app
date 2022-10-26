import * as SQLite from 'expo-sqlite';

const localDb = SQLite.openDatabase('notes.db');

export class DatabaseStore {
  static init() {
    return new Promise((resolve, reject) => {
      localDb.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, content TEXT, title TEXT)',
          [],
          () => resolve(),
          (_, error) => reject(error),
        );
      });
    });
  }
  
  static getNotes() {
     return new Promise((resolve, reject) => {
       localDb.transaction(tx => {
         tx.executeSql(
           'SELECT id, content, title FROM notes',
           [],
           (_, result) => resolve(result.rows._array),
           (_, error) => reject(error),
         );
       });
     });
  }

  static createNote({ content, title = 'New awesome note' }) {
    return new Promise((resolve, reject) => {
      localDb.transaction(tx => {
        tx.executeSql(
          'INSERT INTO notes (content, title) VALUES (?, ?)',
          [content, title],
          (_, result) => resolve({ id: result.insertId, addedNote: result.rows }),
          (_, error) => reject(error),
        );
      });
    });
  }

  static deleteNote({ id }) {
    return new Promise((resolve, reject) => {
      localDb.transaction(tx => {
        tx.executeSql(
          'DELETE FROM notes WHERE id=?',
          [id],
          (_, result) => resolve({ result }),
          (_, error) => reject(error),
        );
      });
    });
  }
  static updateNoteTitle({ id, title }) {
    return new Promise((resolve, reject) => {
      localDb.transaction(tx => {
        tx.executeSql(
          'UPDATE notes SET title=? WHERE id=?',
          [title, id],
          (_, result) => resolve({ result }),
          (_, error) => reject(error),
        );
      });
    });
  }
  static updateNoteContent({ content, id }) {
    return new Promise((resolve, reject) => {
      localDb.transaction(tx => {

        tx.executeSql(
          'UPDATE notes SET content=? WHERE id=?',
          [content, id],
          (_, result) => resolve({ result }),
          (_, error) => reject(error),
        );
      });
    });
  }
}