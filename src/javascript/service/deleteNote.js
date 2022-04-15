import { getRoute, setRoute } from '../helpers';
import { deleteNoteById } from '../store';
import { Route } from '../enums';

const deleteNote = () => {
  const id = getRoute()[1];

  deleteNoteById(id);
  setRoute(Route.Active);
};

export { deleteNote };
