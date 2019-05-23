import React from 'react';
import Friend from './components/Friend';
import axios from "axios";




class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: this.friend,
      AddFriend: {
        age: '',
        name: '',
        email: ''
      }

    }

  }
  changeHandler = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="name" id="name" type="text" />
          <input placeholder="number" id="email" type="email" />
          <input placeholder="age" id="age" type="number" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default FriendForm;