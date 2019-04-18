import React, { Component } from 'react';
import App from './App';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
    }
  }

  set() {
    this.setState({page: 'top'});
  }

  render() {
    return (
      <div>
        <div>
          ユーザーID : <input type="text" name="userId" value="" />
        </div>
        <div>
          パスワード : <input type="password" name="password" value="" />
        </div>
        <div>
          <button id="loginButton" onClick={this.set.bind(this)}>ログイン</button>
        </div>
      </div>
    )
  }

  /*
  render() {
    let Content = null;

    if(this.state.page !== 'top') {
      Content = (() => (
          <div>
            <div>
              ユーザーID : <input type="text" name="userId" value="" />
            </div>
            <div>
              パスワード : <input type="password" name="password" value="" />
            </div>
            <div>
              <button id="loginButton" onClick={this.set.bind(this)}>ログイン</button>
            </div>
          </div>
        ));
    }else {
      Content = (() => <App page="top" />);
    }

    return (
      <div>
        <Content />
      </div>
    );
  }
  */
}
