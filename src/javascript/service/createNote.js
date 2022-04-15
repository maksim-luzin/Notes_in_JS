import { getDataForm, getId, setRoute } from '../helpers';
import { addNote } from '../store';
import { Route, Status } from '../enums';

const createNote = () => {
  const createdContent = getDataForm();
  if (!createdContent.content || !createdContent.name) return;

  const id = getId();
  const created = new Date();

  addNote({ id, created, status: Status.Active, ...createdContent });
  setRoute(Route.Active);
};

export { createNote };
