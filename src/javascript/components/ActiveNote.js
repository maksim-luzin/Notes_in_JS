import { Route } from '../enums';
import { getIcon, getContentForView, getCreatedDateForView, getDateFromContent } from '../helpers';

const ActiveNote = ({
  id,
  category,
  name,
  content,
  created
}) => (`
  <div class='row row-note' data-id='${id}'>
    <div class='icon'>
      <div class='icon-background'>
        <i class='fas ${getIcon(category)}'></i>
      </div>
    </div>
    <div class='name'>${getContentForView(name)}</div>
    <div class='created'>${getCreatedDateForView(created)}</div>
    <div class='category'>${category}</div>
    <div class='content'>${getContentForView(content)}</div>
    <div class='dates'>${getDateFromContent(content)}</div>
    <a href='${Route.EditNote}/${id}' class='edit'><i class='fas fa-pen'></i></a>
    <a href='${Route.ArchiveNote}/${id}' class='archive'><i class='fas fa-caret-square-down'></i></a>
    <a href='${Route.ConfirmDelete}/${id}' class='delete'><i class='fas fa-trash'></i></a>
  </div>
`);

export { ActiveNote };