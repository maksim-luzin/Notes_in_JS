import { getNotes } from '../store';

const getSummaryNotesInCategory = (categorySummary, statusSummary) => (
  getNotes().reduce((amount, { category, status }) => (
    category === categorySummary && status === statusSummary
      ? amount + 1
      : amount
  ), 0)
);

export { getSummaryNotesInCategory };
