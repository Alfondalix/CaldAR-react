import React, { Component } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Nav from './components/nav/Nav';
import Buildings from './components/buildings/Buildings';
import Data from './mocks/buildings.json';
import NewBuilding from './components/buildings/NewBuilding';
import EditBuilding from './components/buildings/EditBuilding';

class App extends Component {
  state = {
    data: Data,
  };

  /* ADD */
  addBuilding = (building) => {
    building.id = this.state.data[this.state.data.length - 1].id + 1;
    this.setState({
      data: [...this.state.data, building],
    });
  };

  /* EDIT AND UPDATE */
  updateBuilding = (updatedBuilding) => {
    const updatedBuildings = this.state.data;
    const index = updatedBuildings.findIndex(
      (oldBuilding) => oldBuilding.id === updatedBuilding.id
    );
    updatedBuildings[index] = updatedBuilding;
    this.setState({
      data: updatedBuildings,
    });
  };

  searchBuilding = (id) =>
    this.state.data.find((building) => parseInt(building.id) === parseInt(id));

  /* DELETE */
  deleteBuilding = (id) => {
    this.setState({
      data: [...this.state.data.filter((building) => building.id !== id)],
    });
  };

  render() {
    return (
      <>
        <div className="app-wrapper">
          <Aside />
          <div className="wrapper">
            <Nav />
            <Buildings
              buildings={this.state.data}
              deleteBuilding={this.deleteBuilding}
            />
            <div className="create-edit">
              <div className="new-building">
                <NewBuilding addBuilding={this.addBuilding} />
              </div>
              <div className="edit-building">
                <EditBuilding
                  searchBuilding={this.searchBuilding}
                  updateBuilding={this.updateBuilding}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
