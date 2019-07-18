import React, { Component } from 'react';
import App from './App';
import firebase from './firebaseConfig';

export default class Detail extends Component {
  async componentWillMount() {
    const todo = await firebase
                        .database()
                        .ref(this.props.id)
                        .once('value')
                        .then(snapshot => snapshot.val());
    this.setState({todo: todo});
  }

  constructor(props) {
    super(props);
    this.state = {
      page: '',
      todo: [],
    }
  }

  set(val) {
    this.setState({page: val});
  }

  edit() {
    // TODO
  }

  render() {
    return (
      <div>
        <div name="title">詳細画面</div>
        <div>
          <div>
            TODO ID : {this.props.id}
          </div>
          <div>
            TODO タイトル : {this.state.todo["title"]}
          </div>
          <div>
            TODO 詳細説明 : {this.state.todo["description"]}
          </div>
          <div>
            登録画像 : <img alt="" src="https://placehold.jp/150x150.png"  />
          </div>
        </div>
        <div>
          <button onClick={this.edit.bind(this)}>編集</button>
        </div>
      </div>
    );
  }
}
