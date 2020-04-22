import React, { Component } from 'react'

class ListContacts extends Component {
  // render method describes UI of our component
  render() {
    console.log('Props', this.props)
    return (
      <ol className="contact-list">
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ol>
    )
  }
}

export default ListContacts
