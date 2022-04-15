import { Route } from "../enums";
import { setRoute } from "../helpers";

const viewNote = target => {
  const row = target.closest('.row');
  if (!row) return;

  const id = row?.dataset?.id;
  if (!id) return;

  setRoute(`${Route.ViewNote}/${id}`);
};

export { viewNote };