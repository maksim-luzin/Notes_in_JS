/* eslint-disable no-console */
import { getArrayCategoryNames } from '../helpers';
import { CategorySummary } from '../components';

const TableWithSummaries = () => (
  getArrayCategoryNames()
    .map(category => CategorySummary(category))
    .join('')
);

export { TableWithSummaries };
