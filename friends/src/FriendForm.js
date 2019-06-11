import React from 'react';
import Friend from './components/Friend';
import axios from "axios";


class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        email: '',
        age: '',
        name: ''
      }

    }
  }


  changeHandler = e => {
    this.setState({
      friend: {

        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    this.props.addFriend(e, this.state.friend);
    this.setState({
      friend: {
        age: '',
        name: '',
        email: ''
      }
    });
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <form id="form" onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} placeholder="name" id="name" type="text" name="name" value={this.state.friend.name} />

          <input onChange={this.changeHandler} placeholder="email" id="email" type="email" name="email" value={this.state.friend.email} />
          <input onChange={this.changeHandler} placeholder="age" id="age" type="text" name="age" value={this.state.friend.age} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;