import { CategoryOptions } from './CategoryOptions';
import { FieldNames, Actions, Route, Status } from '../enums';
import { getContent, getRoute } from '../helpers';

const Note = () => {
  const {
    category,
    name,
    content,
    status
  } = getContent();

  const newRoute = status === Status.Archived
    ? Route.Archived
    : Route.Active;

  const actionName = getRoute()[0] === Route.NewNote
    ? Actions.Create
    : Actions.Save;

  const disabled = status === Status.Archived;

  return (`
    <form class='created-task' name='${FieldNames.Note}'>
      <fieldset class='task-option'>
        <label class='select-category'>
          <span>Category</span>
          <select
            name='${FieldNames.Category}'
            ${disabled ? 'disabled' : ''}
          >
            ${CategoryOptions(category)}
          </select>
        </label>
        <label class='note-name'>
          <span>Name</span>
          <input
            name='${FieldNames.Name}'
            placeholder='Write your note name'
            value='${name}'
            ${disabled ? 'disabled' : ''}
          />
        </label>
      </fieldset >
      <textarea
        class='note-content'
        name='${FieldNames.Content}'
        placeholder='Write your note'
        ${disabled ? 'readonly' : ''}
      >${content}</textarea>
      <div class='row-new-note'>
        <a href='${newRoute}' class='cancel-create'>Cancel</a>
        ${status === Status.Archived
      ? ''
      : (`
          <button 
            data-action='${actionName}'
            class='create-action' 
          >
            ${actionName}
          </button >
        `)
    }
      </div >
    </form >
  `);
};

export { Note };
