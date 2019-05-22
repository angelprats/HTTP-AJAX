import React from 'react';
import Friend from './Friend';




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