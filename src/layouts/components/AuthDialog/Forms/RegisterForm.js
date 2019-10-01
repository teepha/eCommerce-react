import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, InputAdornment, withStyles } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PasswordIcon from "@material-ui/icons/VpnKey";
import NameIcon from "@material-ui/icons/Person";
import { TextFieldFormsy } from "../../../../components/Formsy";
import Formsy from "formsy-react";
import styles from "./styles";
import * as customerActions from "../../../../store/actions/customer";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  form = React.createRef();

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    e.preventDefault();
    this.props.createCustomer({ ...this.state });
  };

  render() {
    return (
      <div className="w-full flex flex-row justify-center">
        <Formsy
          onValidSubmit={this.onSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          ref={form => (this.form = form)}
          className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
          id="registerForm"
        >
          <TextFieldFormsy
            className="w-full mb-4"
            type="text"
            name="name"
            label="Name"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <NameIcon className="text-20" color="action" />
                </InputAdornment>
              )
            }}
            variant="outlined"
            helperText=""
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />

          <TextFieldFormsy
            className="w-full mb-4"
            type="text"
            name="email"
            label="Email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon className="text-20" color="action" />
                </InputAdornment>
              )
            }}
            variant="outlined"
            helperText=""
            required
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <TextFieldFormsy
            className="w-full mb-4"
            type="password"
            name="password"
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordIcon className="text-20" color="action" />
                </InputAdornment>
              )
            }}
            variant="outlined"
            helperText=""
            required
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full mx-auto normal-case"
            aria-label="LOG IN"
            value="legacy"
            id="btnFormRegister"
            onClick={this.handleRegister}
          >
            Register
          </Button>
        </Formsy>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createCustomer: customerActions.createCustomer
    },
    dispatch
  );
}

const mapStateToProps = ({ shoppingCart, customer }) => {
  return {
    customerData: customer.user.data
  };
};

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterForm)
);
