import { Actions, Route } from "../enums";
import { setRoute } from "../helpers";
import { createNote } from "./createNote";
import { saveNote } from "./saveNote";
import { deleteNote } from "./deleteNote";

const actionsListener = event => {
  const actionName = event?.target?.dataset?.action;
  if (!actionName) return;
  event.preventDefault();

  switch (actionName) {
    case Actions.Save:
      saveNote();
      break;

    case Actions.Create:
      createNote();
      break;

    case Actions.Delete:
      deleteNote();
      break;

    default:
      setRoute(Route.Active);

  }
};

export { actionsListener };
