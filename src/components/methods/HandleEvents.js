import React from "react";

class HandleEvents extends React.Component {
    constructor() {
        super()
        this.callThree = this.callThree.bind(this)
    }

    // problem
    callOne() {
        console.log('test if callOne is active - try to execute method directly inside event')
        console.log(this)
    }

    // solve 1
    callTow() {
        console.log('solve 1 by bind in element')
        console.log(this)
    }

    // solve 2
    callThree() {
        console.log('solve 2 by bind in constructor')
        console.log(this)
    }

    // solve 3
    callFour = () => {
        console.log('solve 3 by arrow function')
        console.log(this)
    }

    render() {
        return (
            <>
                <button onClick={this.callOne}>check this by call one</button><br />
                <button onClick={this.callTow.bind(this)}>check this by call two</button><br />
                <button onClick={this.callThree}>check this by call three</button><br />
                <button onClick={this.callFour}>check this by call four</button>
            </>
        )
    }
}

export default HandleEvents