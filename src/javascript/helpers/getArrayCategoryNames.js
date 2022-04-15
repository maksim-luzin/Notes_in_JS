import { Category } from '../enums';

const getArrayCategoryNames = () => (
  Object.values(Category).map(({ name }) => name)
);

export { getArrayCategoryNames };
