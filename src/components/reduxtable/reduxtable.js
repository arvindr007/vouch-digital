import React from 'react';
import { connect } from 'react-redux';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
      <th>Company Name</th>
          <th>Email Address</th>
          <th>Phone No</th>
          <th>Contact Person</th>
          <th>Facilitator</th>
          <th>Sites</th>
          <th>Tenants</th>
          <th>Tenent Groups</th>
          <th>Actions</th>
      </thead>
      <tbody>
      {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.company_name}</td>
            <td>{client.email_address}</td>
            <td>{client.phone_number}</td>
            <td>{client.contact_person}</td>
            <td>{client.facilitator}</td>
            <td>{client.sites}</td>
            <td>{client.tenants}</td>
            <td>{client.tenant_groups}</td>
            {/* <td>{client.email}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.tableData,
  };
};

export default connect(mapStateToProps)(Table);