import React from "react";

export class Button extends React.Component{
    render (){
        const {handleClick,buttonName} = this.props
        return(
            <button onClick={this.props.handleClick}>
                {this.props.children}
                {buttonName}
            </button>
        )
    }
}