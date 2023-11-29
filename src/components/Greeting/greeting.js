import React from "react";

export class Greeting extends React.Component{
    render(){
        return (
            <h2>{this.props.greetingText}</h2>
        )
    }
}