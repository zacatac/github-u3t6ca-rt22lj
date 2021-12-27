import React from 'react';
import { setCookie } from '../lib/cookie-utils';
type Props = {};

type State = {
  username: string;
  password: string;
};

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onClickLogin = () => {
    if (this.state.username == 'hello' && this.state.password == 'world') {
      setCookie('username', 'hello');
      setCookie('password', 'world');
      alert('succesfully logged in !');
    } else {
      alert('Incorrect credentials');
    }
  };

  onChangeUsername = (newValue: Event) =>
    this.setState({ username: newValue.target.value });

  onChangePassword = (newValue: Event) =>
    this.setState({ password: newValue.target.value });

  render() {
    return (
      <section>
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Login
        </h2>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
          <label>Password: </label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <br />
          <button onClick={this.onClickLogin}>Login</button>
        </div>
      </section>
    );
  }
}

export default Login;
