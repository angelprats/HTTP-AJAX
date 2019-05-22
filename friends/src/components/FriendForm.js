import React from 'react';
import Friend from './Friend'

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

      </div>
    )
  }
}

export default FriendForm;