import React, {Component} from 'react';
import './Aside.css';

class Aside extends Component{
  constructor() {
    super()
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes();
    this.state = {
      currentDate: date,
      currentTime: time
    }
  
}

  render(){
    return(
      <>
        <div>
          <aside className="aside-container">
            <div className="content-container">
              <h1 className="title">CaldAR</h1>
              <ul className="list-resources">
                <li>Companies</li>
                <li>Buildings</li>
                <li>Boilers</li>
                <li>Technicians</li>
              </ul>
              <div className="date">
                <p>
                  { this.state.currentDate }
                </p>
                <p>
                  {this.state.currentTime}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </>
    );
  }
}

export default Aside;