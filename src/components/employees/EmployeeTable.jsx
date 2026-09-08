import React from 'react';

const EmployeeTable = ({ employees }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {/* Table rows */}
      </tbody>
    </table>
  );
};

export default EmployeeTable;