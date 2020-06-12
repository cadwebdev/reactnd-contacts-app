import React, { Component } from 'react'
import propTypes from 'prop-types'

class ListContacts extends Component {
  static propTypes = {
    contacts: propTypes.array.isRequired,
    onDeleteContact: propTypes.func.isRequired,
  }
  // add a property to our component state object
  state = {
    query: '',
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  render() {
    const { query } = this.state
    const { contacts, onDeleteContact, onNavigate } = this.props

    const showingContacts =
      query === ''
        ? contacts
        : contacts.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
          )

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <a href="#create" onClick={onNavigate} className="add-contact" />
        </div>
        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} of {contacts.length}
              <button onClick={this.clearQuery}>Show all</button>
            </span>
          </div>
        )}

        <ol className="contact-list">
          {showingContacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${contact.avatarURL})` }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button className="" onClick={() => onDeleteContact(contact)}>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts
