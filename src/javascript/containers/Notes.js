const Notes = ({ notes, status, Component }) => (
  notes.map(note => (
    note.status !== status
      ? ''
      : Component(note)
  )).join('')
);

export { Notes };
