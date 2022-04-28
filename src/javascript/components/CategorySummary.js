import { getIcon } from '../helpers';

const CategorySummary = ({
  category,
  active,
  archived
}) => `
    <div class='row row-note'>
      <div class='icon'>
        <div class='icon-background'>
          <i class='fas ${getIcon(category)}'></i>
        </div>
      </div>
      <div class='note-category'>${category}</div>
      <div class='active'>
        ${active}
      </div>
      <div class='archived'>
        ${archived}
      </div>
    </div>
  `;

export { CategorySummary };