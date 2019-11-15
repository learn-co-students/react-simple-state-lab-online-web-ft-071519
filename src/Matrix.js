import React, { Component } from 'react';
import Cell from './cell.js';

export default class Matrix extends Component {
    
    genRow = (vals) => (
        // console.log(vals)
        vals.map(val => (<Cell rowVals={val} />)) // replace me and render a cell component instead!
    )
    
    genMatrix = () => (
        // console.log(this.props)
        this.props.values.map(rowVals => 
            <div className="row">{this.genRow(rowVals)}</div>)
    )
    
    render() {
        // console.log(this.props.values) // This part works.
        return (
            <div id="matrix">
                {this.genMatrix()}
            </div>
        )
    }
}

Matrix.values = [
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
    ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F']
]
