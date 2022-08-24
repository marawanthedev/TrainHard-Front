import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  let history = useHistory();
  const correctCredentials = {
    email: "samer@admin.com",
    password: "samer@budgee#admin",
  };
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmission = (e) => {
    e.preventDefault();

    if (
      email === correctCredentials["email"] &&
      password === correctCredentials["password"]
    ) {
      props.setAuthState(true);
     history.push('/dashboard')
    }
  };
  return (
    <div className="container mt-4">
      <h1 className="mb-3" style={{ textAlign: "center" }}>
        ?Are you an Admin{" "}
      </h1>

      <h1 style={{ textAlign: "center" }}>تسجيل دخول </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmission}
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
