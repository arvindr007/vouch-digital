import React, { useState } from "react";
import { Tabs, Tab, Form, Button, Breadcrumb } from "react-bootstrap";

const AddClient = () => {
  const [key, setKey] = useState("basic_info");
  const [primaryColor, setPrimaryColor] = useState("#007bff");
  const [useColor, setUseColor] = useState(true);
  // const [loginModelPosition, setLoginModelPosition] = useState("left");
  const [loginModelPosition, setLoginModelPosition] = useState("left");

  const handlePrimaryColorChange = (e) => {
    setPrimaryColor(e.target.value);
  };

  const handleUseColorChange = (e) => {
    setUseColor(e.target.value === "true");
  };

  const handleLoginModelPositionChange = (e) => {
    setLoginModelPosition(e.target.value);
  };

  const handleReset = () => {
    setPrimaryColor("#007bff");
    setUseColor(true);
    setLoginModelPosition("left");
  };

  const handleSaveAndContinue = () => {
    // Add code to save data and navigate to the next tab
    setKey("address"); // change to the next tab
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Client Master</Breadcrumb.Item>
        <Breadcrumb.Item href="/viewclients">Add Client</Breadcrumb.Item>
        <Breadcrumb.Item active>
          {key === "basic_info" ? "Create Profile" : "Payment Setup"}
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1>Add client</h1>
      <div className=" p-2">
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="basic_info" title="01 CREATE PROFILE">
            <Form>
              <div>
                <Form.Group controlId="companyLogo">
                  <Form.Label>Add company logo</Form.Label>
                  <Form.Control type="file" accept="image/*" />
                </Form.Group>
              </div>
              <div className="d-flex mt-4">
                <Form.Group controlId="companyName">
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="website" className="mx-3">
                  <Form.Control type="text" placeholder="Enter website" />
                </Form.Group>
              </div>
              <div className=" d-flex  mt-2">
                <Form.Group controlId="businessCategory">
                  <Form.Control as="select">
                    <option value="">Select</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="facultyManagement" className="mx-3">
                  <Form.Control as="select">
                    <option value="">Select faculty management company</option>
                    <option value="company1">Company 1</option>
                    <option value="company2">Company 2</option>
                    <option value="company3">Company 3</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className=" d-flex  mt-2">
                <Form.Group controlId="companyEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                  />
                </Form.Group>
                <Form.Group controlId="mobileNumber" className="mx-3">
                  <Form.Control type="text" placeholder="Enter mobile number" />
                </Form.Group>
              </div>
              <div className=" d-flex mt-2 ">
                <Form.Group controlId="selectState">
                  <Form.Control as="select">
                    <option value="">Select</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="selectCity" className="mx-3">
                  <Form.Control as="select">
                    <option value="">Select city</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    <option value="city3">City 3</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="pincode" className="mx-3">
                  <Form.Control type="text" placeholder="Enter pincode" />
                </Form.Group>
              </div>
              <div className=" d-flex mt-2">
                <Form.Group controlId="gstNumber">
                  <Form.Control type="text" placeholder="Enter GST number" />
                </Form.Group>

                <Form.Group controlId="faxNumber" className="mx-3">
                  <Form.Control type="text" placeholder="Fax Number" />
                </Form.Group>
              </div>
              <div className="mt-3">
                <Button variant="primary" onClick={handleSaveAndContinue}>
                  Save & Continue
                </Button>
                <Button variant="secondary" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </Form>
          </Tab>
          <Tab eventKey="address" title="02 PAYMENT SETUP">
            <Form>
              <div class="form-inputs-container">
                <Form.Group controlId="billingAddress">
                  {/* <Form.Label>Billing address</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="Enter billing address"
                  />
                </Form.Group>
                <div className="d-flex  mt-2">
                  <Form.Group controlId="selectState">
                    {/* <Form.Label>Select state</Form.Label> */}
                    <Form.Control as="select">
                      <option value="">Select</option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                      <option value="state3">State 3</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="selectCity" className="mx-3">
                    {/* <Form.Label>Select city</Form.Label> */}
                    <Form.Control as="select">
                      <option value="">Select</option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                      <option value="city3">City 3</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="pincode" className="mx-3">
                    {/* <Form.Label>Pincode</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter pincode" />
                  </Form.Group>
                </div>
                <div className="d-flex mt-2">
                  <Form.Group controlId="numOfSiteAccess">
                    {/* <Form.Label>Select number of site access</Form.Label> */}
                    <Form.Control
                      type="number"
                      placeholder="Enter number of site access"
                    />
                  </Form.Group>
                  <Form.Group controlId="payableAmountPerSite" className="mx-3">
                    {/* <Form.Label>Payable amount per site</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Enter payable amount per site"
                    />
                  </Form.Group>
                  <Form.Group controlId="total" className="mx-3">
                    {/* <Form.Label>Total</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Enter total amount"
                    />
                  </Form.Group>
                </div>
                <div className="d-flex mt-2">
                  <Form.Group controlId="discount">
                    {/* <Form.Label>Discount in %</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Enter discount in %"
                    />
                  </Form.Group>
                  <Form.Group controlId="reason" className="mx-3" required>
                    {/* <Form.Label>Reason</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="Enter reason for discount"
                      required
                    />
                  </Form.Group>
                </div>
              </div>

              <p className="mt-3">Payment Mode</p>
              <div className="d-flex">
                <Form.Check
                  type="checkbox"
                  label="UPI"
                  style={{ marginRight: "12px" }}
                />
                <Form.Check
                  type="checkbox"
                  label="Net Banking"
                  style={{ marginRight: "12px" }}
                />
                <Form.Check
                  type="checkbox"
                  label="Cash"
                  style={{ marginRight: "12px" }}
                />
                <Form.Check
                  type="checkbox"
                  label="Cheque"
                  style={{ marginRight: "12px" }}
                />
                <Form.Check type="checkbox" label="Other" />
              </div>
            </Form>
            <div className=" mt-3">
              <Button variant="primary" onClick={handleSaveAndContinue}>
                Save & Continue
              </Button>
              <Button variant="secondary" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Tab>
          <Tab eventKey="contact_person" title="03 THEME SETUP">
            <Form.Group>
              <Form.Label>Primary Color</Form.Label>
              <Form.Control
                type="color"
                value={primaryColor}
                onChange={handlePrimaryColorChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Use Color</Form.Label>
              <div key="true" className="mb-3">
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="true"
                  checked={useColor === true}
                  onChange={handleUseColorChange}
                />
              </div>
              <div key="false" className="mb-3">
                <Form.Check
                  type="radio"
                  label="No"
                  value="false"
                  checked={useColor === false}
                  onChange={handleUseColorChange}
                />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Where should be the login model?</Form.Label>
              <div key="left" className="mb-3">
                <Form.Check
                  type="radio"
                  label="Left"
                  value="left"
                  checked={loginModelPosition === "left"}
                  onChange={handleLoginModelPositionChange}
                />
              </div>
              <div key="right" className="mb-3">
                <Form.Check
                  type="radio"
                  label="Right"
                  value="right"
                  checked={loginModelPosition === "right"}
                  onChange={handleLoginModelPositionChange}
                />
              </div>
              <div key="center" className="mb-3">
                <Form.Check
                  type="radio"
                  label="Center"
                  value="center"
                  checked={loginModelPosition === "center"}
                  onChange={handleLoginModelPositionChange}
                />
              </div>
            </Form.Group>
            <div className="mt-3">
              <Button variant="primary" onClick={handleSaveAndContinue}>
                Save & Continue
              </Button>
              <Button variant="secondary" onClick={handleReset} classname="mr-3">
                Reset
              </Button>
            </div>
          </Tab>
          <Tab eventKey="facilitator" title="04 MODULES SETUP">
            <Form>
              <Form.Check type="checkbox" label="Home/Dashboard" />
              <Form.Check type="checkbox" label="Helpdesk" />
              <Form.Check type="checkbox" label="Assets" />
              <Form.Check type="checkbox" label="Daily Tasks" />
              <Form.Check type="checkbox" label="PPM" />
              <Form.Check type="checkbox" label="Employees" />
              <Form.Check type="checkbox" label="Profile" />
              <Form.Check type="checkbox" label="Transactions" />
            </Form>
            <div className="mt-3">
              <Button variant="primary" onClick={handleSaveAndContinue}>
                Save & Continue
              </Button>
              <Button variant="secondary" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AddClient;
