import React from "react";

export class Header extends React.Component{
    render(){
        return (
            <h2>{this.props.headerText}</h2>
        )
    }
}