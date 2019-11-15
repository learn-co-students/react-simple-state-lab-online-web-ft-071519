import React, { Component } from 'react';

export default class Cell extends Component {
    
    constructor(props) {
        
        super() //super() is required, need to find out why.
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        this.setState({
            color: "#333"
            }
        )
    }

    render() {
        console.log(this.props)
        return (
            <div 
                className="cell" 
                style={{backgroundColor: this.state.color}}
                onClick={ this.handleClick }>
            </div>
        )
    }
}