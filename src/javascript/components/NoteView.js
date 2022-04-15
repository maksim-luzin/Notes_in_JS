/* eslint-disable max-len */
import { CategoryOptions } from './CategoryOptions';
import { getContent } from '../helpers';
import { Route, FieldNames } from '../enums';

const NoteView = () => {
  const { category, name, content } = getContent();

  return (`
 <div class='created-background'>
    <form class='created-task' name='${FieldNames.Note}'>
      <fieldset class='task-option'>
        <label class='select-category'>
          <span>Category</span>
          <select name='${FieldNames.Category}' disabled>
            ${CategoryOptions(category)}
          </select>
        </label>
        <label class='note-name'>
          <span>Name</span>
          <input name='${FieldNames.Name}' class='note-name' placeholder='Write your note name' value='${name}' disabled></input>
        </label>
      </fieldset>
      <textarea class='note-content' name='${FieldNames.Content}' placeholder='Write your note' readonly>${content}</textarea>
      <div class='row-new-note'>
        <a href='${Route.Archived}' class='cancel-create'>Cancel</a>
      </div>
    </form>
  </div>
  `);
};

export { NoteView };