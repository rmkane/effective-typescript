import _ from 'lodash';

function parseCSV(csvData: string, includesHeader = true) {
  const csv = csvData
    .trim()
    .split('\n')
    .map((line) => line.split(',').map((field) => field.trim()));

  if (!includesHeader) {
    return csv;
  }

  const [header, ...rows] = csv;

  if (rows.some((row) => row.length !== header.length)) {
    throw new Error(
      'Some rows have a different number of fields than the header'
    );
  }

  return rows.map((row) =>
    Object.fromEntries(row.map((field, i) => [header[i], field]))
  );
}

const csvData = `
id,name,price
1,apple,100
2,orange,200
3,banana,300
`;

const records = parseCSV(csvData);

// pnpm exec ts-node src/items/no27.ts
console.log(records);
