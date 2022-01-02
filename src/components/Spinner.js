import React, { Component } from 'react';
import loading from './loading.gif'

class Spinner extends Component {
    render() {
        return (
            <div className="container" id="spin">
                <img src={loading} alt="Loading"/>
                
            </div>
        );
    }
}

export default Spinner;