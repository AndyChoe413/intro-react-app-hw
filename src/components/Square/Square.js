import React, { Component } from 'react'
import "./Square.css"

export class Square extends Component {
    render() {
        return (
            <div>
                <img src={this.props.siargao} alt={this.props.name}/>
                <span>
                    {this.props.name}
                </span>
            </div>
        )
    }
}

export default Square
