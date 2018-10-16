import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/hello_world'

class App extends Component {
    constructor(props){
        super(props);

        this.state = { }
    }
    
    render(){
        return(
            <HelloWorld />
        )
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));