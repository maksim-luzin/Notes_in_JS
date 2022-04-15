import { CategoryOptions } from './CategoryOptions';
import { getContent } from '../helpers';
import { Actions, Route, FieldNames } from '../enums';

const NoteCreate = () => {
  const { category, name, content } = getContent();

  return (`
  <div class='created-background'>
    <form class='created-task' name='${FieldNames.Note}'>
      <fieldset class='task-option'>
        <label class='select-category'>
          <span>Category</span>
          <select name='${FieldNames.Category}'>
            ${CategoryOptions(category)}
          </select>
        </label>
        <label class='note-name'>
          <span>Name</span>
          <input name='${FieldNames.Name}' class='note-name' placeholder='Write your note name' value='${name}'></input>
        </label>
      </fieldset>
      <textarea class='note-content' name='${FieldNames.Content}' placeholder='Write your note'>${content}</textarea>
      <div class='row-new-note'>
        <a href='${Route.Active}' class='cancel-create'>Cancel</a>
        <button data-action='${!category ? Actions.Create : Actions.Save}' class='create-action'>
          ${!category ? Actions.Create : Actions.Save}
        </button>
      </div>
    </form>
  </div>
  `);
};

export { NoteCreate };