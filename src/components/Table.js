import React from 'react';
import TableElement from './TableElement';

function Table({ measureData }) {
  return (
    <div className="overflow-x-auto mb-10">
      {measureData && (
        <table className="table table-compact sm:table-normal table-zebra text-center">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Pressure</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(measureData).map((val, i) => {
              return (
                <TableElement
                  key={i}
                  id={i}
                  temp={val.temperature}
                  pres={val.pressure}
                  hum={val.humidity}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Table;
