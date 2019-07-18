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
    this.setState({todoList: Object.entries(todoList).map(([key, value]) => ({key, value}))});
  }

  constructor(props) {
    super(props);
    this.state = {
      page: '',
      todoList: [],
      items: [],
      id: '',
    }
  }

  set(id) {
    this.setState({id: id});
  }

  setItems(i, key) {
    const itemsCopy = this.state.items.slice();
    itemsCopy[i] = key;
    this.setState({items: itemsCopy});
  }

  async remove(key) {
    firebase.database().ref(key).remove();

    const todoList = await firebase
                        .database()
                        .ref()
                        .once('value')
                        .then(snapshot => snapshot.val());
    if (todoList) {
        this.setState({todoList: Object.entries(todoList).map(([key, value]) => ({key, value}))});
    } else {
        this.setState({todoList: []});
    }
  }

  search() {
    // TODO
  }

  render() {
    if (this.state.id !== '') {
      return (
        <Detail id={this.state.id} />
      )
    } else {
        return (
          <div>
            <div>
              <div name="title">検索</div>
              <div>タイトル : <input type="text" name="title" value="" /></div>
              <div>説明 内容 : <input type="text" name="description" value="" /></div>
              <div>
                <button onClick={this.search.bind(this)}>検索</button>
              </div>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>NO</th>
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
                      <td>{data.key}</td>
                      <td>{data.value.title}</td>
                      <td>{data.value.description}</td>
                      <td><button name="detailButton" onClick={this.set.bind(this, data.key)}>詳細</button></td>
                      <td><button onClick={this.remove.bind(this, data.key)}>削除</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
    }
  }
}
