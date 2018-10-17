import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/hello_world'

class App extends Component {
    constructor(props){
        super(props);
        this.state = { statement: "Hello world" }
    }
    
    render(){
        return(
            <HelloWorld statement = {this.state.statement}/>
        )
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));