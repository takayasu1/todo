import React, { Component } from 'react';
import App from './App';
import Detail from './Detail';
import firebase from './firebaseConfig';

export default class List extends Component {

  async componentWillMount() {
    const todoList = await firebase
                        .database()
                        .ref()
                        .once('value')
                        .then(snapshot => snapshot.val());
    console.log(todoList);
    //this.setState({todoList: Object.entries(todoList)});
    //this.setState({todoList: Object.keys(todoList).map(function (key) {return todoList[key]})})
    this.setState({todoList: Object.entries(todoList).map(([key, value]) => ({key, value}))});
  }

  constructor(props) {
    super(props);
    this.state = {
      page: '',
      todoList: [],
    }
  }

  set(val) {
    this.setState({page: val});
  }

  render() {
    return(
      <div>
        <div>
          <div name="title">検索</div>
          <div>タイトル : <input type="text" name="title" value="" /></div>
          <div>説明 内容 : <input type="text" name="description" value="" /></div>
          <div>
            <button type="button" name="button">検索</button>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>TODO ID</th>
                <th>TODO タイトル</th>
                <th>TODO 説明</th>
                <th>詳細</th>
                <th>削除</th>
              </tr>
            </thead>
            <tbody>
              {console.log(this.state.todoList)}
              {this.state.todoList.map((data, i) => (
                <tr>
                  <td>{i+1}</td>
                  <td>{data.value.description}</td>
                  <td>{data.value.title}</td>
                  <td>sample update</td>
                  <td><button name="detailButton" onClick={this.set.bind(this, 'detail')}>詳細</button></td>
                  <td><button onClick={this.set.bind(this)}>削除</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  /*
  render() {
    let Content = null;
    //console.log(this.state.todoList);
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
      case 'detail':
        Content = (() => <Detail />);
        break;
      default:
        Content = (() => (
          <div>
            <div>
              <div name="title">検索</div>
              <div>タイトル : <input type="text" name="title" value="" /></div>
              <div>説明 内容 : <input type="text" name="description" value="" /></div>
              <div>
                <button type="button" name="button">検索</button>
              </div>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>TODO ID</th>
                    <th>TODO タイトル</th>
                    <th>TODO 説明</th>
                    <th>詳細</th>
                    <th>削除</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.todoList.map((data, i) => (
                    <tr>
                      <td>{i}</td>
                      <td>{data.description}</td>
                      <td>{data.name}</td>
                      <td>sample update</td>
                      <td><button name="detailButton" onClick={this.set.bind(this, 'detail')}>詳細</button></td>
                      <td><button>削除</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ));
        break;
    }

    return (
      <div>
        <Content />
      </div>
    )
  }
  */
}
