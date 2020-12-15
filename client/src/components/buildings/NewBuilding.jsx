import React, { Component } from 'react';

export class NewBuilding extends Component {
  state = {
    fullName: '',
    address: '',
    boilers: [],
    phoneNumber: '',
  };

  changeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  create = (e) => {
    e.preventDefault();
    const newBuilding = {
      fullName: this.state.fullName,
      address: this.state.address,
      boilers: [this.state.boilers],
      phoneNumber: this.state.phoneNumber,
    };
    this.props.addBuilding(newBuilding);
    this.setState({
      fullName: '',
      address: '',
      boilers: [],
      phoneNumber: 0,
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>New Building</h1>
          <form onSubmit={this.create}>
            <input
              value={this.state.fullName}
              onChange={this.changeValue}
              placeholder="Name..."
              name="fullName"
              type="text"
              required
            />
            <input
              value={this.state.address}
              onChange={this.changeValue}
              placeholder="Address..."
              name="address"
              type="text"
              required
            />
            <input
              value={this.state.boilers}
              onChange={this.changeValue}
              placeholder="Boilers..."
              name="boilers"
              type="text"
              required
            />
            <input
              value={this.state.phoneNumber}
              onChange={this.changeValue}
              placeholder="Phone Number..."
              name="phoneNumber"
              type="text"
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}

export default NewBuilding;
