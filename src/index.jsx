
import ReactDom from 'react-dom'
import React, { Component } from 'react'
import SessionDisplay from './SessionDisplay'
import Spinner from './Spinner';

export class App extends Component {
    
    state = {
        lat: null,
        errMessage: ""
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error =>  this.setState({errMessage: error.message})
        );
    }

    renderContent() {
        if (this.state.errMessage && !this.state.lat) {
            return <h1 className="ui text-primary">Error: { this.state.errMessage }</h1>
        }
        if ( !this.state.errMessage && this.state.lat) {
            return <SessionDisplay lat={ this.state.lat } />
            
        }
        return <Spinner message="Please accept locaton request" />
    }
    render() {
        return(
            <div className="border-red">
            { this.renderContent() }
        </div>
        );
    }
}


ReactDom.render(<App/>, document.querySelector('#root'))