import { TableNotes } from './TableNotes';
import { TableSummaries } from './TableSummaries';

const PageWithTable = () => (`
  <div class='main'>
    ${TableNotes()}
    ${TableSummaries()}
  </div>
`);

export { PageWithTable };