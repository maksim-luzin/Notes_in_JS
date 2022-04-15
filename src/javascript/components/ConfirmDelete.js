import { Actions, Route } from '../enums';

const ConfirmDelete = () => `
  <div class='confirm-background'>
    <div class='confirm-form'>
      <div>
        Are you sure, then you want to delete this note?
      </div>
      <div class='confirm-action'>
        <a href='${Route.Active}' class='cancel'>Cancel</a>
        <button class='delete-action' data-action='${Actions.Delete}'>Delete</button>
      </div>
    </div>
  </div>
`;
export { ConfirmDelete };
