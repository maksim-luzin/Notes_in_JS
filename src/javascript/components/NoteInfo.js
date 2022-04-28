import { Route, Status } from '../enums';
import {
  getIcon,
  getContentForView,
  getCreatedDateForView,
  getDateFromContent
} from '../helpers';

const NoteInfo = ({
  id,
  category,
  name,
  content,
  created,
  status
}) => {
  const editViewRoute = status === Status.Active
    ? `${Route.EditNote}/${id}`
    : `${Route.ViewNote}/${id}`;

  const archiveUnzipRoute = status === Status.Active
    ? `${Route.ArchiveNote}/${id}`
    : `${Route.UnzipNote}/${id}`;

  const confirmDeleteRoute = `${Route.ConfirmDelete}/${id}`;

  return (`
    <div class="row row-note" >
      <div class='icon'>
        <div class='icon-background'>
          <i class='fas ${getIcon(category)}'></i>
        </div>
      </div>
      <div class="name">${getContentForView(name)}</div>
      <div class="created">${getCreatedDateForView(created)}</div>
      <div class="category">${category}</div>
      <div class="content">${getContentForView(content)}</div>
      <div class="dates">${getDateFromContent(content)}</div>
      <a href="${editViewRoute}" class="edit">
        <i class='fas ${status === Status.Active ? 'fa-pen' : 'fa-eye'}'></i>
      </a>
      <a href="${archiveUnzipRoute}" class="archive">
        <i class='fas fa-caret-square-down'></i>
      </a>
      ${status === Status.Archived
      ? ''
      : (`
          <a href="${confirmDeleteRoute}" class="delete">
            <i class='fas fa-trash'></i>
          </a>
        `)
    }
    </div >
  `);
};

export { NoteInfo };
