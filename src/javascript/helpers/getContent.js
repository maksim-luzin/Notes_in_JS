import { Route, NewNote } from '../enums';
import { getNoteById } from '../store';
import { getRoute } from './getRoute';

const getContent = () => {
  const path = getRoute();

  return (
    path[0] === Route.NewNote
      ? NewNote
      : getNoteById(path[1])
  );
};

export { getContent };