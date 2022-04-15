import { getNoteById } from '../store';

const getId = () => {
  let id;

  do {
    id = String(Math.floor(10000000 * Math.random()));
  } while (getNoteById(id));

  return id;
};

export { getId };