import { getRoute, setRoute } from '../helpers';
import { updateNoteById } from '../store';
import { Route, Status } from '../enums';

const unzipNote = () => {
  const id = getRoute()[1];

  updateNoteById(id, { status: Status.Active });
  setRoute(Route.Archived);
};

export { unzipNote };
