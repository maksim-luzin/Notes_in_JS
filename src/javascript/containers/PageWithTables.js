/* eslint-disable indent */
import { Table } from './Table';
import { HeadNotes, NoteInfo, HeadSummary, CategorySummary, CreateNote } from '../components';
import { getRoute, getStatsOfNotes } from '../helpers';
import { Styles } from '../enums';
import { getNotes } from '../store';

const PageWithTables = () => {
  const pathname = getRoute()[0].slice(1);
  const notes = getNotes()
    .filter(({ status }) => status === pathname)
    .sort(({ created1 }, { created2 }) => (
      created1 > created2 ? -1 : 1)
    );

  const stats = getStatsOfNotes();

  return (`
    <div class="main" >
      ${Table({
    Header: HeadNotes,
    Row: NoteInfo,
    dataArray: notes,
    style: Styles.NoteInfoTableStyle
  })}

      ${CreateNote}

      ${Table({
    Header: HeadSummary,
    Row: CategorySummary,
    dataArray: stats,
    style: Styles.NoteSummaryTableStyle
  })}
  </div>
  `);
};

export { PageWithTables };