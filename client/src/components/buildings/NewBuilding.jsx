import React, { Component } from 'react';

export class NewBuilding extends Component {
  state = {
    fullName: '',
    address: '',
    boilers: [],
    phoneNumber: '',
  };

  handleChange = (e) => {
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
        <div className="form-container">
          <h1 className="title-building-2">New Building</h1>
          <form onSubmit={this.create}>
            <input
              value={this.state.fullName}
              onChange={this.handleChange}
              placeholder="Name..."
              name="fullName"
              type="text"
              required
            />
            <input
              value={this.state.address}
              onChange={this.handleChange}
              placeholder="Address..."
              name="address"
              type="text"
              required
            />
            <input
              value={this.state.boilers}
              onChange={this.handleChange}
              placeholder="Boilers..."
              name="boilers"
              type="text"
              required
            />
            <input
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              placeholder="Phone Number..."
              name="phoneNumber"
              type="text"
              required
            />
            <input className="subm-btn" type="submit" value="Add" />
          </form>
        </div>
      </>
    );
  }
}

export default NewBuilding;
