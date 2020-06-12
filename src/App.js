import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends Component {
  state = {
    contacts: [],
    screen: 'list',
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
        {this.state.screen === 'list' && (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            onNavigate={() => {
              this.setState(() => ({
                screen: 'create',
              }))
            }}
          />
        )}
        {this.state.screen === 'create' && <CreateContact />}
      </div>
    )
  }
}

export default App
