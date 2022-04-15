import { getSummaryNotesInCategory, getIcon } from '../helpers';
import { Status } from '../enums';

const CategorySummary = category => `
    <div class='row row-note'>
      <div class='icon'>
        <div class='icon-background'>
          <i class='fas ${getIcon(category)}'></i>
        </div>
      </div>
      <div class='note-category'>${category}</div>
      <div class='active'>
        ${getSummaryNotesInCategory(category, Status.Active)}
      </div>
      <div class='archived'>
        ${getSummaryNotesInCategory(category, Status.Archive)}
      </div>
    </div>
  `;

export { CategorySummary };