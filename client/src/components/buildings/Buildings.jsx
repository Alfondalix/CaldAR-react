import React, { Component } from 'react';
import BuildingItem from './BuildingItem';

export class Buildings extends Component {
  render() {
    return (
      <>
        <h1 className="title-building">Buildings</h1>
        {this.props.buildings.map((building) => (
          <BuildingItem
            deleteBuilding={this.props.deleteBuilding}
            key={building.id}
            building={building}
          />
        ))}
      </>
    );
  }
}

export default Buildings;
