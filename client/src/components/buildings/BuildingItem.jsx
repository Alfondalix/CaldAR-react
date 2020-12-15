import React, { Component } from 'react';
import './Buildings.css';

export class BuildingItem extends Component {
  render() {
    return (
      <div className="container">
        <div>{`ID: ${this.props.building.id}`}</div>
        <div>{`Name: ${this.props.building.fullName}`}</div>
        <div>{`Address: ${this.props.building.address}`}</div>
        <div>{`Boilers: ${this.props.building.boilers.join('-')}`}</div>
        <div>{`Phone Number: ${this.props.building.phoneNumber}`}</div>
        <button
          className="btn"
          onClick={this.props.deleteBuilding.bind(this, this.props.building.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}

export default BuildingItem;
