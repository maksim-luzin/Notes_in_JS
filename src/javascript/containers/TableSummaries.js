import { HeadSummary } from '../components';
import { TableWithSummaries } from './TableWithSummaries';

const TableSummaries = () => `
    <div class='table'>
      ${HeadSummary}
      <div class='table-with-summaries'>
        ${TableWithSummaries()}
      </div>
    </div>
  `;

export { TableSummaries };
