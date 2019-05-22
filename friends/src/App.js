import React from 'react';
import FriendForm from './components/FriendForm'

import './App.css';

function App() {
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

  }
}

export default App;
