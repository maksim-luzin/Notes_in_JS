import { getRoute, setRoute } from '../helpers';
import { updateNoteById } from '../store';
import { Route, Status } from '../enums';

const archiveUnzipNote = () => {
  const [status, id] = getRoute();

  const newStatus = status === Route.UnzipNote
    ? Status.Active
    : Status.Archived;

  const newRoute = status === Route.UnzipNote
    ? Route.Archived
    : Route.Active;

  updateNoteById(id, { status: newStatus });
  setRoute(newRoute);
};

export { archiveUnzipNote };
