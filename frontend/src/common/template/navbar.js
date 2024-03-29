import React, { Component } from "react";
import userPhoto from "admin-lte/dist/img/user2-160x160.jpg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../auth/authActions";

class Navbar extends Component {
  state = {
    open: false
  };
  changeOpen() {
    this.setState({ open: !this.state.open });
  }

  changeMouseLeave() {
    if (this.state.open === true) {
      this.setState({ open: !this.state.open });
    }
  }
  render() {
    const { logout, user } = this.props
    return (
      <nav className="navbar navbar-static-top">
        <a href='' className="sidebar-toggle"
          data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </a>

        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown user user-menu">
              <a href='' className="dropdown-toggle" data-toggle="dropdown">
                <img src={userPhoto} className="user-image" alt='user' />
                <span className="hidden-xs">{user.nomeGuerra}</span>
              </a>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img src={userPhoto} className="img-circle" alt='user'/>

                  <p>
                    {user.nomeGuerra}
                    <small>{user.email}</small>
                  </p>
                </li>

                <li className="user-footer">
                  <div className="pull-right">
                    <button onClick={logout} className="btn btn-default btn-flat">
                      Sair
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)