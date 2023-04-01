import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../../home";
import Navbar from "../sidebar/navbar";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState(new FormData());

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // send a POST request to the login API endpoint
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({ email: username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // login successful
        console.log("Login successful");
        // reset the form
        setUsername("");
        setPassword("");
        setError(null);

        // show success message to the user
        alert("Login successful!");

        // update isLoggedIn state in parent component
        props.onLogin();

        // redirect to viewclients page
        navigate("/viewclients");
      } else {
        // login failed
        const errorResponse = await response.json();
        setError(errorResponse.error);

        // show error message to the user
        alert(`Login failed: ${errorResponse.error}`);
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error(error);

      // display an error message to the user
      alert("Login failed. Please try again.");
    }
  };

  return (
    <section class="h-100 gradient-form bg-dark">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <form>
                      <h5>
                        <strong>Welcome</strong>
                      </h5>
                      <p>Enter your Username and Password</p>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Username"
                          value={username}
                          onChange={handleUsernameChange}
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          class="form-control"
                          placeholder=" Password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Log in
                        </button>
                        <br></br>
                        <a class="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2 bg-primary">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4 ">We are more than just a company</h4>
                    <p class="small mb-0">Arvind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
