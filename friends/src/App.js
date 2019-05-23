import React from 'react';
import FriendForm from './FriendForm'
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
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }


  addFriend = (event, friend) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        })
          .catch(err => {
            console.log(err)
          });
      })
  }


  render() {
    return (
      <div>
        <div className='friend-form' />
        <FriendForm friends={this.state.friends}
          addFriend={this.addFriend}
        />
        {this.state.friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    )
  }
}


export default App;
