import React from "react"

/********************* Passing By Function ***************************/
function PassByFunction(props) {
    console.log(props)
    return <h1>welcome {props.name} from function</h1>
}

/********************* Passing By Class ***************************/
class PassByClass extends React.Component {
    constructor(props) {
        super(props)
        // learn state first
        // don't do this, Only use this pattern if you intentionally want to ignore prop updates.
        // try to change props from developer tool
        this.state = {stateName: props.name}
    }
    // you can pass props with constructor to override constructor Component
    render() {
        return (
            <>
                {/* will not be updated */}
                <h1>welcome {this.state.stateName} from class by state</h1>
                {/* will be updated */}
                <h1>welcome {this.props.name} from class {this.props.age} by props</h1>
            </>
        )
    }
}

export {PassByClass}
export default PassByFunction