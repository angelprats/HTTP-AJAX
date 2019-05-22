import React from 'react';
import FriendForm from './components/FriendForm'
import Friend from './components/Friend'
import axios from "axios";

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/items")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className='friend-form' />
        <FriendForm friends={this.state.friends} componentDidMount={this.componentDidMount} />
        {this.state.friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    )
  }
}


export default App;
