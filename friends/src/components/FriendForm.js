import React from 'react';

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
}

export default FriendForm;