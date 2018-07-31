import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "./authActions";
import Row from "../common/layout/row";
import Grid from "../common/layout/grid";
import Messages from "../common/msg/messages";
import Input from "../common/form/inputAuth";

class Auth extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = event => {
    console.log("email: " + event.target.value);
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    const values = { email, password };
    login(values);
  };

  componentDidMount() {
    document.querySelector("body").className = "login-page";
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <b>SYSChoque</b>{" "}
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Bem vindo!</p>
          <form onSubmit={this.onSubmit}>
            <Input
              type="input"
              name="email"
              placeholder="Insira o email"
              icon="user"
              hide={false}
              onChange={this.handleEmailChange}
            />

            <Input
              type="password"
              name="password"
              placeholder="Insira a senha"
              icon="lock"
              hide={false}
              onChange={this.handlePasswordChange}
            />

            <Row>
              <Grid cols="4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Entrar
                </button>
              </Grid>
            </Row>
          </form>
          <br />
        </div>
        <Messages />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Auth);
