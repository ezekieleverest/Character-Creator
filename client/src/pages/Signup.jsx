import React from "react";
import { useHistory } from "react-router-dom";
import RosterBtn from "../components/RosterBtn";

function Signup() {
  const history = useHistory();
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state),
      });

      if(res.status !== 200) throw new Error('No worky!')

      history.push("/login")
    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    <div className="container logRegContainer">
      <form onSubmit={signup}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="form-control email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
            className="form-control password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="viewRosterSpot">
          <button className="btn btn-lg rosterBtn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
