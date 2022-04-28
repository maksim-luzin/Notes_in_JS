const Table = ({ Header, Row, dataArray, style }) => (
  `
    <div class="table" >
      ${Header}
      <div
        class="table-with-rows"
        style="${style || {}}"
      >
        ${dataArray.map(data => Row(data)).join('')}
      </div>
    </div >
  `
);

export { Table };
