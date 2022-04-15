/* eslint-disable no-console */
import { render } from './render';
import { Route } from '../enums';
import { PageWithTable } from '../containers';
import { NoteCreate, ConfirmDelete, NoteView } from '../components';
import { getRoute, setRoute } from '../helpers';
import { archiveNote } from './archiveNote';
import { unzipNote } from './unzipNote';

const router = async () => {
  const path = getRoute();

  switch (path[0]) {
    case Route.Active:
    case Route.Archived:
      render(PageWithTable);
      break;

    case Route.NewNote:
      render(NoteCreate);
      break;

    case Route.EditNote:
      render(NoteCreate);
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

    case Route.ViewNote:
      render(NoteView);
      break;

    default:
      setRoute(Route.Active);
  }
};

export { router };
