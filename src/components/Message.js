import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'How are you?',
            btnTxt : 'Fine'
        }
    }
    changeMessage = () => {
        this.setState({
            message : 'Fuck off',
            btnTxt : 'Lol'
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button  onClick={this.changeMessage}>{this.state.btnTxt}</button>
            </div>
        )
    }
}

export default Message