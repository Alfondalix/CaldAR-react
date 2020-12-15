import React, { Component } from 'react';

export class EditBuilding extends Component {
  state = {
    id: 0,
    fullName: '',
    address: '',
    boilers: [],
    phoneNumber: 0,
  };

  editBuilding = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submitEdit = (e) => {
    e.preventDefault();
    const edited = {
      id: this.state.id,
      fullName: this.state.fullName,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      boilers: [this.state.boilers],
    };
    this.props.editBuilding(edited);
  };

  render() {
    return (
      <>
        <h1>Edit</h1>
        <form onSubmit={this.submitEdit}>
          <input type="text" placeholder="Name..." />
        </form>
      </>
    );
  }
}

export default EditBuilding;
