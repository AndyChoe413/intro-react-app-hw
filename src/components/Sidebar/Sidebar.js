import React, { Component } from 'react'
import "./Sidebar.css"

export class Sidebar extends Component {

    state = {
        colorArray: ["Blue", "Red", "Yellow"],
        backgroundColorInput: ""
    };

    handleColorChange = color => {
        console.log(color)
        this.setState({
            backgroundColorInput: color,
        })
    }

    render() {
    return (
      <div
        className="sidebar"
        style={{ backgroundColor: this.state.backgroundColorInput }}
      >
        <ul className="ul-style">
          {this.state.colorArray.map((item, index) => {
            return (
              <li
                className="list-style"
                key={index}
                onClick={() => this.handleColorChange(item)}
              >
                {item}
              </li>
            );
          })}
                <button onClick={() => this.handleColorChange("")}>Reset</button>
            </ul>
            
      </div>
    );
  }
}


export default Sidebar
