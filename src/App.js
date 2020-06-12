import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({ contacts }))
    })
  }

  removeContact = (deleteContact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((contact) => {
        return contact.id !== deleteContact.id
      }),
    }))
    ContactsAPI.remove(deleteContact)
  }

  render() {
    // In order to get data to a Component you pass that
    // data in as a prop when you create the Component element
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    )
  }
}

export default App
