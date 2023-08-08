import React from "react";

class PassingByState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'mohamed',
            age: 20
        }
    }

    render() {
        console.log('from render')
        return (
            <>
                <h1>{this.state.username}</h1>
                <button onClick={() => {
                    this.setState({username: 'ahmed'})
                }}>click</button>
            </>
        )

    }
}

export default PassingByState