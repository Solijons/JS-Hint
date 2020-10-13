const exportCsv = (rowData, name) => {
  const anchor = document.createElement('a');
  const csvRows = [];

  let csvString = '';
  let headers = '';

  for (const row of rowData) {
    // tslint:disable: object-literal-sort-keys
    csvRows.push({
      // row data i.e row.id
      id: row.id,
    });
  }

  headers = Object.keys(csvRows[0]).map((header) => `"${header}"`).join(',') + '\n';

  csvString += headers;
  csvRows.forEach((row) => csvString += Object.values(row).map((val) => `"${val}"`).join(',') + '\n');

  anchor.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvString));
  anchor.setAttribute('download', `${name}.csv`);
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
