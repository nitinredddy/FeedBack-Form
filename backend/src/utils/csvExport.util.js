// utils/csvExport.js
import {Parser} from 'json2csv'

function convertToCSV(data, fields) {
  try {
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);
    return csv;
  } catch (error) {
    throw new Error('CSV conversion failed: ' + error.message);
  }
}

export {convertToCSV}
