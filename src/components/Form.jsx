import React from "react";

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

function Form() {
function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userIsRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.userIsRegistered ? "Register" : "Login"}
      </button>
    </form>
  );
}

export default Form;
