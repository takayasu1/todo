import React, { Component } from 'react';
import App from './App';

export default class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
    }
  }

  set(val) {
    this.setState({page: val});
  }

  render() {
    return (
      <div>
        トップ画面
      </div>
    )
  }
  /*
  render() {
    let Content = null;

    switch(this.state.page) {
      case "list":
        Content = (() => <App page="list" />);
        break;
      case "add":
        Content = (() => <App page="add" />);
        break;
      case "index":
        Content = (() => <App page="index" />);
        break;
      default:
        Content = (() => (
          <div>
            <p>
              <li onClick={this.set.bind(this, 'top')}>トップ画面へ</li>
              <li onClick={this.set.bind(this, 'list')}>一覧画面</li>
              <li onClick={this.set.bind(this, 'add')}>新規追加</li>
              <li onClick={this.set.bind(this, 'index')}>ログアウト</li>
            </p>
            トップ画面
          </div>
        ));
        break;
    }

    return (
      <div>
        <Content />
      </div>
    );
  }
  */
}
