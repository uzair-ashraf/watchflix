import React from 'react';
import { getUsers } from '../api/apis';
import { signInUser } from '../actions/addUserAction';
import { connect } from 'react-redux';
import Navbar from './navbar';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: ''
    };
    this.signIn = this.signIn.bind(this);
    this.setUser = this.setUser.bind(this);
  }
  componentDidMount() {
    getUsers()
      .then(users => this.setState({ users }))
      .catch(err => console.error(err));
  }
  setUser({ target: { value } }) {
    this.setState({ selectedUser: value });
  }
  signIn(e) {
    e.preventDefault();
    if (!this.state.selectedUser) return;
    this.props.dispatch(signInUser(this.state.selectedUser))
      .then(() => this.props.history.push('/dashboard'));
  }
  render() {
    return (
      <>
      <Navbar/>
      <div className="signin-heading">
        Sign In
      </div>
        <form className="signin-form" onSubmit={this.signIn}>
          <select className="signin-dropdown" onChange={this.setUser}>
            <option value="">Select User</option>
            {this.state.users.map(user => {
              return (
                <option
                  key={user.user_id}
                  value={user.user_id}
                >
                  {user.username}
                </option>
              );
            })}
          </select>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
      </>
    );
  }
}

export default connect()(SignIn);
