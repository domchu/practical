import React, { useState } from "react";
import Data from "../Table/data";

const table = () => {
  //   const [dataValue, setdataValue] = useState(Data);
  return (
    <>
      <div style={{ marginTop: "100px" }} className="text-center">
        <h2>table</h2>
        <table className="text-center align-center">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          {Data.length === 0 ? (
            <tbody className="text-center mb-0">
              <tr>
                <td colSpan={8} className="text-center mb-0">
                  No data found
                </td>
              </tr>
            </tbody>
          ) : (
            Data.map((item, index) => {
              console.log(Data);
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1} </th>
                  <td>{item.name} </td>
                  <td>{item.email} </td>
                  <td>{item.phone} </td>
                  <td>{item.address} </td>
                  <td>{item.status} </td>
                </tr>
              </tbody>;
            })
          )}
        </table>
      </div>
    </>
  );
};

export default table;
