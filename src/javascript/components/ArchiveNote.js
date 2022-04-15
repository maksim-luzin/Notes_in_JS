import { Route } from '../enums';
import {
  getIcon,
  getContentForView,
  getCreatedDateForView,
  getDateFromContent
} from '../helpers';

const ArchiveNote = ({
  id,
  category,
  name,
  content,
  created
}) => (`
  <div class='row row-note'>
    <div class='cell-note icon'>
      <div class='icon-background'>
        <i class='fas ${getIcon(category)}'></i>
      </div>
    </div>
    <div class='cell-note name'>${getContentForView(name)}</div>
    <div class='cell-note created'>${getCreatedDateForView(created)}</div>
    <div class='cell-note category'>${category}</div>
    <div class='cell-note content'>${getContentForView(content)}...</div>
    <div class='cell-note dates'>${getDateFromContent(content)}</div>
    <a href='${Route.ViewNote}/${id}' class='cell-note edit'><i class="far fa-eye"></i></a>
    <a href='${Route.UnzipNote}/${id}' class='cell-note archive'><i class='fas fa-caret-square-down'></i></a>
    <div class='cell-note delete'></div>
  </div>
`);

export { ArchiveNote };
