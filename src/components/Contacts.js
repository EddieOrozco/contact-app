import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Eddie O",
          email: "eddieo23@gmail.com",
          phone: "777-777-7777"
        },
        {
          id: 2,
          name: "Josh P",
          email: "josh13@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 3,
          name: "Rascal R",
          email: "rascal7@gmail.com",
          phone: "222-222-2222"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
