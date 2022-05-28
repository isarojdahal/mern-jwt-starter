import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../api/config";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [passwordError, setpasswordError] = useState("");
  // const [emailError, setemailError] = useState("");

  // const handleValidation = (event) => {
  //   let formIsValid = true;

  //   if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
  //     formIsValid = false;
  //     setemailError("Email Not Valid");
  //     return false;
  //   } else {
  //     setemailError("");
  //     formIsValid = true;
  //   }

  //   if (!password.match(/^[a-zA-Z]{6,22}$/)) {
  //     formIsValid = false;
  //     setpasswordError(
  //       "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
  //     );
  //     return false;
  //   } else {
  //     setpasswordError("");
  //     formIsValid = true;
  //   }

  //   return formIsValid;
  // };

  const loginSubmit = async (e) => {
    e.preventDefault();
    // const isValid = handleValidation();
    // if (isValid) {
    console.log("is valid");
    //axios
  };

  return (
    <div className="App">
      <div className="container p-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 p-3">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {/* {emailError} */}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {/* {passwordError} */}
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
