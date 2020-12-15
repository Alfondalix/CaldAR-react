import React, { Component } from 'react';

export class EditBuilding extends Component {
  state = {
    fullName: '',
    address: '',
    boilers: [],
    phoneNumber: '',
    id: 1,
  };

  getBuilding = (e) => {
    const building = this.props.searchBuilding(e.target.value);
    if (this.props.searchBuilding(e.target.value)) {
      this.setState({
        id: e.target.value,
        ...building,
        phoneNumber: building.phoneNumber,
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitUpdate = (e) => {
    e.preventDefault();
    const updatedBuilding = {
      id: this.state.id,
      fullName: this.state.fullName,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      boilers: [this.state.boilers],
    };
    this.props.updateBuilding(updatedBuilding);
  };

  render() {
    return (
      <>
        <div className="form-container">
          <h1 className="title-building-2">Edit Building</h1>
          <form onSubmit={this.submitUpdate}>
            <input
              type="number"
              placeholder="ID..."
              onChange={this.getBuilding}
            />
            <input
              value={this.state.fullName}
              type="text"
              placeholder="Name..."
              name="fullName"
              id="fullName"
              required
              onChange={this.handleChange}
            />
            <input
              value={this.state.address}
              type="text"
              placeholder="Address..."
              name="address"
              id="address"
              required
              onChange={this.handleChange}
            />
            <input
              value={this.state.boilers}
              type="text"
              placeholder="Boilers..."
              name="boilers"
              id="boilers"
              onChange={this.handleChange}
            />
            <input
              value={this.state.phoneNumber}
              type="text"
              placeholder="Phone Number..."
              name="phoneNumber"
              id="phoneNumber"
              onChange={this.handleChange}
            />
            <input className="subm-btn" type="submit" value="Edit" />
          </form>
        </div>
      </>
    );
  }
}

export default EditBuilding;
