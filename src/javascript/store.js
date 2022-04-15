/*
*const store = [
*    {
*      id: 1,
*      category: 'Task',
*      name: 'Shopping list',
*      content: 'Tomatoes bread',
*      created: sec,
*      status: 'active/archive'
*    }
*  ]
*/

let store = [];

const getNotes = () => [...store];
const getNoteById = searchId => store.find(({ id }) => (id === searchId));
const addNotes = notes => { store = [...notes, ...store]; };
const addNote = note => { store = [note, ...store]; };
const deleteNoteById = deleteId => { store = store.filter(({ id }) => id !== deleteId); };
const updateNoteById = (updateId, editNote) => {
  store = store.map(note => (
    note.id !== updateId
      ? note
      : { ...note, ...editNote }
  ));
};

export {
  getNotes,
  getNoteById,
  addNotes,
  addNote,
  deleteNoteById,
  updateNoteById
};
