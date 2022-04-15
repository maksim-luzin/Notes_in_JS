import { Route } from "../enums";

const HeadSummary = `
  <div class='row row-head'>
    <div class='icon'></div>
    <div class='note-category'>Note Category</div>
    <a href='${Route.Active}' class='cell-head active'>Active</a>
    <a href='${Route.Archived}' class='cell-head archived'>Archived</a>
  </div>
`;
export { HeadSummary };
