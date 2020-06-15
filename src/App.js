import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

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

  createContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact]),
      }))
    })
  }

  render() {
    // In order to get data to a Component you pass that
    // data in as a prop when you create the Component element
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route />
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={(contact) => {
                this.createContact(contact)
                history.push('/')
              }}
            />
          )}
        />
      </div>
    )
  }
}

export default App
