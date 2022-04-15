import { ActiveArchiveNotes } from './ActiveArchiveNotes';
import { HeadNotes } from '../components';
import { Route } from '../enums';

const TableNotes = () => `
    <div class='table table-notes'>
      ${HeadNotes}
      <div class='table-with-notes'>
        ${ActiveArchiveNotes()}
      </div>
    </div>
    <div class='row-create-note'>
      <a class='create-note' href='${Route.NewNote}'>Create Note</a>
    </div>
  `;

export { TableNotes };
