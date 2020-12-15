import React, { Component } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Nav from './components/nav/Nav';
import Buildings from './components/buildings/Buildings';
import Data from './mocks/buildings.json';
import NewBuilding from './components/buildings/NewBuilding';

class App extends Component {
  state = {
    data: Data,
  };

  addBuilding = (building) => {
    building.id = this.state.data[this.state.data.length - 1].id + 1;
    this.setState({
      data: [...this.state.data, building],
    });
  };

  editBuilding = (editedBuilding) => {
    const edited = this.state.data;
    this.setState({
      data: edited,
    });
  };

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
              <NewBuilding addBuilding={this.addBuilding} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
