import { getDataForm, getRoute, setRoute } from '../helpers';
import { updateNoteById } from '../store';
import { Route } from '../enums';

const saveNote = () => {
  const id = getRoute()[1];
  const updateContent = getDataForm();

  if (!updateContent.content || !updateContent.name) return;

  updateNoteById(id, updateContent);
  setRoute(Route.Active);
};

export { saveNote };
