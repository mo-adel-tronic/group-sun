import React from "react";

class Lifecycle extends React.Component {
    // First see console log in every method
    // Sec try to update props and state from dev tools
    constructor(props) {
        super(props)
        // set state with default values
        this.state = {
            stateName: this.props.name,
            safeDefState: 'default value'
        }
        // print to check
        console.log(`props data: ${this.props.name}
        state data: ${this.state.stateName}
        state safe data: ${this.state.safeDefState}
        place: constructor`)
    }

    static getDerivedStateFromProps(props, state) {
        // print to check
        console.log(`props data: ${props.name}
        state data: ${state.stateName}
        state safe data: ${state.safeDefState}
        place: getDerivedStateFromProps`)
        return {safeDefState: props.name}
    }

    render() {
        // print to check
        console.log(`props data: ${this.props.name}
        state data: ${this.state.stateName}
        state safe data: ${this.state.safeDefState}
        place: render`)
        return (
            <>
               <h1>props data: {this.props.name}</h1> 
               <h1>state data: {this.state.stateName}</h1> 
               <h1>state data by getDerivedStateFromProps method: {this.state.safeDefState}</h1> 
            </>
        )
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({stateName: 'state chenged by setTimeOut'})
        }, 3000)
        // print to check
        console.log(`props data: ${this.props.name}
        state data: ${this.state.stateName}
        state safe data: ${this.state.safeDefState}
        place: componentDidMount`)
    }
}

export default Lifecycle