import React, { Component } from 'react'
import "./Body.css"
import siargao1 from "./images/siargao-1.jpg"
import Square from "../Square/Square"
import siargao2 from "./images/siargao-2.jpg"
import siargao3 from "./images/siargao-3.jpg"
import siargao4 from "./images/siargao-4.jpg"

export class Body extends Component {
    render() {
        return (
            <div className="body">
                <p>
                    <img className="img" src={siargao1} alt="island" />
                    <br/>
                    Siargao is a tear-drop shaped island in the Philippine Sea situated 196 kilometers southeast of Tacloban. It has a land area of approximately 437 square kilometres (169 sq mi). The east coast is relatively straight with one deep inlet, Port Pilar. The coastline is marked by a succession of reefs, small points and white, sandy beaches. The neighboring islands and islets have similar landforms.
                </p>

                <div style={{display: "flex", height:"100px", width:"100px"}}>
                <Square name="siargao-1" siargao={ siargao2}/>
                <Square name="siargao-2"  siargao={ siargao3}/>
                <Square name="siargao-3"  siargao={ siargao4}/>
                </div>
             
            </div>
        )
    }
}

export default Body
