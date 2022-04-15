import { getArrayCategoryNames } from "../helpers";

const CategoryOptions = selectCategory => (
  getArrayCategoryNames()
    .sort()
    .map(category => (
      `<option ${category === selectCategory ? 'selected' : ''}>${category}</option>`)
    )
    .join('')

);

export { CategoryOptions };
