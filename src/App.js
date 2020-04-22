import React, { Component } from 'react'
import ListContacts from './ListContacts'

const contacts = [
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: 'karen_isgrigg',
    avatarURL: 'http://localhost:5001/karen.jpg',
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: 'richardkalehoff',
    avatarURL: 'http://localhost:5001/richard.jpg',
  },
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: 'tylermcginnis',
    avatarURL: 'http://localhost:5001/tyler.jpg',
  },
]

class App extends Component {
  render() {
    // In order to get data to a Component you pass that
    // data in as a prop when you create the Component element
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    )
  }
}

export default App
