// App component
import "./App.css";
import LoginPage from "./components/login page/loginpage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./components/view clients/clientslice";
import ClientTable from "./components/view clients/clienttable";
import MyNavbar from "./components/sidebar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddClient from "./components/add clients/addclients";
import Contact from "./contact";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {isLoggedIn ? (
            <Row>
              <Col sm={3}>
                <MyNavbar />
              </Col>
              <Col sm={9}>
                <Routes>
                  <Route path="/viewclients" element={<ClientTable />} />
                  <Route path="/addclients" element={<AddClient />} />
                </Routes>
              </Col>
            </Row>
          ) : (
            <LoginPage onLogin={handleLogin} />
          )}
        </Router>
      </Provider>
    </div>
  );
}

export default App;