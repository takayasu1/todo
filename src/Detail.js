import React, { Component } from 'react';
import App from './App';

export default class Detail extends Component {
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
    let Content = null;

    switch(this.state.page) {
      case 'top':
        Content = (() => <App page="top" />);
        break;
      case 'list':
        Content = (() => <App page="list" />);
        break;
      case 'add':
        Content = (() => <App page="add" />);
        break;
      case 'index':
        Content = (() => <App page="login" />);
        break;
      default:
        Content = (() => (
          <div>
            <div name="header">
              <p>
                <li onClick={this.set.bind(this, 'top')}>トップ画面へ</li>
                <li onClick={this.set.bind(this, 'list')}>一覧画面</li>
                <li onClick={this.set.bind(this, 'add')}>新規追加</li>
                <li onClick={this.set.bind(this, 'index')}>ログアウト</li>
              </p>
            </div>

            <div name="title">詳細画面</div>
            <div>
              <div>
                TODO ID : 1
              </div>
              <div>
                TODO タイトル : sampleタイトル
              </div>
              <div>
                TODO 詳細説明 :
              </div>
              <div>
                登録画像 : <img alt="" src="https://placehold.jp/150x150.png"  />
              </div>
            </div>
            <div class="">
              <button>編集</button>
            </div>
          </div>
        ));
    }

    return (
      <div>
        <Content />
      </div>
    );
  }
}
