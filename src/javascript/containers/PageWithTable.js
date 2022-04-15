import { TableNotes } from './TableNotes';
import { TableSummaries } from './TableSummaries';

const PageWithTable = () => (`
  ${TableNotes()}
  ${TableSummaries()}
`);

export { PageWithTable };