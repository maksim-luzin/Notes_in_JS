import { getRoute, setRoute } from '../helpers';
import { updateNoteById } from '../store';
import { Route, Status } from '../enums';

const archiveNote = () => {
  const id = getRoute()[1];
  updateNoteById(id, { status: Status.Archived });
  setRoute(Route.Active);
};

export { archiveNote };
