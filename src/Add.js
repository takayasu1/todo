import React, { Component } from 'react';
import App from './App';
import firebase from './firebaseConfig';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //page: '',
      title: '',
      description: '',
      image: '',
    }
  }

  set(val) {
    this.setState({page: val});
  }

  inputChange(e) {
    this.setState({title: e.target.value});
    console.log(e.target.value);
  }

  textareaChange(e) {
    this.setState({description: e.target.value});
    console.log(e.target.value);
  }

  add(id, title, description) {
    firebase.database().ref(id).set({
      title: title,
      description: description,
      //image: image,
    });
  }

  render() {
    return (
      <div>
        <div name="title">新規追加画面</div>
        <div>
          <div>
            TODO タイトル : <input
                              type="text"
                              name="title"
                              value={this.state.title}
                              onChange={this.inputChange.bind(this)} />
          </div>
          <div>
            TODO 説明 : <textarea
                          name="description"
                          rows="8"
                          cols="80"
                          value={this.state.description}
                          onChange={this.textareaChange.bind(this)}></textarea>
          </div>
          <div>
            画像登録 : <input type="file" name="image" />
          </div>
          <div>
            <button onClick={this.add.bind(this, 1, this.state.title, this.state.description)}>登録</button>
          </div>
        </div>
      </div>
    )
  }

  /*
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
            <div name="title">新規追加画面</div>
            <div>
              <div>
                TODO タイトル : <input
                                  type="text"
                                  name="title"
                                  value={this.state.title}
                                  onChange={this.inputChange.bind(this)} />
              </div>
              <div>
                TODO 説明 : <textarea
                              name="description"
                              rows="8"
                              cols="80"
                              value={this.state.description}
                              onChange={this.textareaChange.bind(this)}></textarea>
              </div>
              <div>
                画像登録 : <input type="file" name="image" />
              </div>
              <div>
                <button onClick={this.add.bind(this)}>登録</button>
              </div>
            </div>
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
