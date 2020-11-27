import React from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { setUserSignedIn } from "../../actions";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(setUserSignedIn());
  };
  return (
    <div className="Form">
      <form action="">
        <div className="field">
          <input type="text" placeholder="Email" />
          <span class="focus-border"></span>
        </div>
        <div className="field">
          <input type="password" placeholder="Password" />{" "}
        </div>
        <div className="submission">
          <input
            className="button"
            type="submit"
            value="Login"
            onClick={signIn}
          />
          Create an account ?
        </div>
      </form>
    </div>
  );
}

export default Login;
