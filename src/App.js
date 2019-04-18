import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Top from './Top';
import List from './List';
import Add from './Add';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      //name: 'koura',
      //list: (<List name="koura" value="aa"/>),
    }
  }

  set(val) {
    this.setState({page: val});
    console.log(val);
  }

  render() {
    //const page = this.props.page;
    const page = this.state.page;
    let Content = null;

    switch(page) {
      case "top":
        Content = (() => <Top />);
        break;
      case "list":
        Content = (() => <List />);
        break;
      case "add":
        Content = (() => <Add />);
        break;
      default:
        Content = (() => <Login />);
        break;
    }

    return (
      <div>
        <div name="header">
          <p>
            <li onClick={this.set.bind(this, 'top')}>トップ画面へ</li>
            <li onClick={this.set.bind(this, 'list')}>一覧画面</li>
            <li onClick={this.set.bind(this, 'add')}>新規追加</li>
            <li onClick={this.set.bind(this, 'index')}>ログアウト</li>
          </p>
        </div>
        <Content />
      </div>
    );
  }
}

export default App;
