import { Notes } from './Notes';
import { ActiveNote, ArchiveNote } from '../components';
import { Status } from '../enums';
import { getNotes } from '../store';
import { getRoute } from '../helpers';

const ActiveArchiveNotes = () => {
  const hash = getRoute();
  const notes = getNotes();

  return (
    hash[0].slice(1) === Status.Active
      ? Notes({ notes, status: Status.Active, Component: ActiveNote })
      : Notes({ notes, status: Status.Archive, Component: ArchiveNote })
  );
};

export { ActiveArchiveNotes };