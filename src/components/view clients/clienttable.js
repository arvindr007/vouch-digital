import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Dropdown, Menu, Modal, Input, Button  } from "antd";
import removeClient from "../view clients/clientslice"

const { Search } = Input;

const ClientTable = () => {
  const clients = useSelector((state) => state.clients);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleRemoveClient = (clientId) => {
    Modal.confirm({
      title: "Are you sure you want to delete this client?",
      onOk: () => dispatch(removeClient({ id: clientId })),
    });
  };


  
  const actionsMenu = (clientId) => (
    <Menu>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete" danger onClick={() => handleRemoveClient(clientId)}>
        Delete
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
    },
    {
      title: "Email Address",
      dataIndex: "email_address",
      key: "email_address",
    },
    {
      title: "Phone No",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Contact Person",
      dataIndex: "contact_person",
      key: "contact_person",
    },
    {
      title: "Facilitator",
      dataIndex: "facilitator",
      key: "facilitator",
    },
    {
      title: "Sites",
      dataIndex: "sites",
      key: "sites",
    },
    {
      title: "Tenants",
      dataIndex: "tenants",
      key: "tenants",
    },
    {
      title: "Tenant Groups",
      dataIndex: "tenant_groups",
      key: "tenant_groups",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Dropdown overlay={actionsMenu(record.id)}>
          <button className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
     <span>...</span>
          </button>
        </Dropdown>
      ),
    },
  ];

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredClients = clients.filter((client) =>
    client.company_name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  const handleExport = () => {
    // Define code to export data here
    console.log("Export button clicked");
  };

// const userMenu = (
//     <Menu>
//       <Menu.Item key="1">Item 1</Menu.Item>
//       <Menu.Item key="2">Item 2</Menu.Item>
//       <Menu.Item key="3">Item 3</Menu.Item>
//       <Menu.Divider />
//       <Menu.Item key="3">Logout</Menu.Item>
//     </Menu>
//   );

  return (
    <>
      <Search
        placeholder="Search clients by company name"
        allowClear
        enterButton
        onSearch={handleSearch}
        style={{ width: "300px", marginBottom: "20px" }}
      />
       <Button type="primary" onClick={handleExport}>Export</Button>
       {/* <Dropdown.Button
        style={{ float: 'right' }}
        className="dropdown-btn"
        overlay={userMenu}
        icon={
          <UserOutlined
            style={{
              fontSize: '28px',
              backgroundColor: '#f0f0f0',
              borderRadius: '50%',
            }}
          />
        }
      ></Dropdown.Button> */}
      <Table dataSource={filteredClients} columns={columns} />
    </>
  );
};

export default ClientTable;