import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

// import FormPersonalDetails from "./FormPersonalDetails";
// import Confirm from "./Confirm";
// import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  // create methods: proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // create methods: proceed to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // handle fields change (input value of all fields)
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  //
  render() {
    // figure out what step are on and depending on which step are on => decide which components to display
    const { step } = this.state; // pull out all to fields
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio }; // pass all values into each component

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values} // *
          ></FormUserDetails>
        );
      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
      default:
      case 4:
        return <h1>Success</h1>;
    }
  }
}

export default UserForm;
