import React from 'react';
import Spreadsheet from 'react-spreadsheet';

function SpreadSheet() {
  const data = [];

  const obj = {
    value: ''
  };

  for (let i = 0; i < 20; i += 1) {
    const columnData = [];

    for (let j = 0; j < 20; j += 1) {
      columnData.push(obj);
    }

    data.push(columnData);
  }

  return <Spreadsheet data={data} />;
}

export default SpreadSheet;
