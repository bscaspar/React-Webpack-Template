import React, { Component } from 'react';

class HelloWorld extends Component {
    render(){
        return (
        <div>
            {this.props.statement}
        </div>
        )
    }
}
export default HelloWorld;