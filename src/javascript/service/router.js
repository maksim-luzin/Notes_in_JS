import { render } from './render';
import { Route } from '../enums';
import { PageWithTables } from '../containers';
import { ConfirmDelete, Note } from '../components';
import { getRoute, setRoute } from '../helpers';
import { archiveNote } from './archiveNote';
import { unzipNote } from './unzipNote';

const router = async () => {
  const path = getRoute();

  switch (path[0]) {
    case Route.Active:
    case Route.Archived:
      render(PageWithTables);
      break;

    case Route.NewNote:
    case Route.EditNote:
    case Route.ViewNote:
      render(Note);
      break;

    case Route.ArchiveNote:
      archiveNote();
      break;

    case Route.UnzipNote:
      unzipNote();
      break;

    case Route.ConfirmDelete:
      render(ConfirmDelete);
      break;

    default:
      setRoute(Route.Active);
  }
};

export { router };
