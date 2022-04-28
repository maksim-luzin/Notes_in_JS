import { getNotes } from '../store';
import { getArrayCategoryNames } from './getArrayCategoryNames';
import { Status } from '../enums/status';

const getStatsOfNotes = () => {
  const categoryStatsUndefined = {
    [Status.Active]: 0,
    [Status.Archived]: 0
  };

  const stats = getNotes()
    .reduce((stats, { category, status }) => {
      const otherStatus =
        status === Status.Active ? Status.Archived : Status.Active;

      if (!stats) {
        return {
          [category]: {
            [status]: 1,
            [otherStatus]: 0
          }
        };
      }

      if (!stats[category]) {
        return { ...stats, [category]: { [status]: 1, [otherStatus]: 0 } };
      }

      const newValue = stats[category][status] + 1;
      return { ...stats, [category]: { ...stats[category], [status]: newValue } };
    }, {});

  const categories = getArrayCategoryNames();

  return categories.map(category => ({
    ...categoryStatsUndefined,
    ...stats[category],
    category
  }));
};

export { getStatsOfNotes };
