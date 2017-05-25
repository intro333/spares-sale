import React, { Component } from 'react';
import './App.css';
import Mainfocus from "./components/Mainfocus/Mainfocus";
import Maincontent from "./components/Maincontent/Maincontent";

class App extends Component {


    constructor(props) {
        super(props);

        this.selectStateChange = this.selectStateChange.bind(this);

        this.state = {
            selectState: {
                status: false,
                visibility: 'hidden',
                opacity: 0
            }
        };
    }

    selectStateChange(visibility, opacity) {
        let status = this.state.selectState.status;
        this.setState({
            selectState: {
                visibility: visibility,
                opacity: opacity,
                status: !status
            }
        });
    }


    render() {
        return (
            <div id="html52">
                <div className="spares-container">
                    <Mainfocus />
                    <Maincontent selectStateChange={this.selectStateChange} selectState={this.state.selectState} />
                </div>
            </div>
        );
    }
}

export default App;