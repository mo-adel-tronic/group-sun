import React from "react";

class Lifecycle2 extends React.Component {
    constructor(props) {
        super(props)
        // set state with default values
        this.state = {
            stateNameWithPropsInsideConstructor: this.props.name,
            stateNameWithPropsByMethod: 'default value by method',
            stateByEvent: 'default value by event'
        }
    }

    // first method called after update
    static getDerivedStateFromProps(props, state) {
        // print to check
        console.log(`
        props data: ${props.name}
        state data with props inside constructor: ${state.stateNameWithPropsInsideConstructor}
        state with props by method: ${state.stateNameWithPropsByMethod}
        state by event: ${state.stateByEvent}
        place: getDerivedStateFromProps`)
        return {stateNameWithPropsByMethod: props.name}
    }

    shouldComponentUpdate() {
        // print to check
        console.log(`
        props data: ${this.props.name}
        state data with props inside constructor: ${this.state.stateNameWithPropsInsideConstructor}
        state with props by method: ${this.state.stateNameWithPropsByMethod}
        state by event: ${this.state.stateByEvent}
        place: shouldComponentUpdate`)
        return true
    }

    changeName = () => {
        this.setState(
            {
                stateNameWithPropsInsideConstructor: 'data changed by button',
                stateNameWithPropsByMethod: "data changed by button",
                stateByEvent: 'data changed by button'
            });
      }

    render() {
        // print to check
        console.log(`
        props data: ${this.props.name}
        state data with props inside constructor: ${this.state.stateNameWithPropsInsideConstructor}
        state with props by method: ${this.state.stateNameWithPropsByMethod}
        state by event: ${this.state.stateByEvent}
        place: render`)
        return (
            <>
               <h1>props data: {this.props.name}</h1> 
               <h1>state data with props inside constructor: {this.state.stateNameWithPropsInsideConstructor}</h1> 
               <h1>state data by getDerivedStateFromProps method: {this.state.stateNameWithPropsByMethod}</h1>
               <h1>state data: {this.state.stateByEvent}</h1>
               <button onClick={this.changeName}>click here</button>
            </>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // print to check
        console.log(`
        props data: ${this.props.name}
        state data with props inside constructor: ${this.state.stateNameWithPropsInsideConstructor}
        state with props by method: ${this.state.stateNameWithPropsByMethod}
        state by event: ${this.state.stateByEvent}

        Prev: 

        props data: ${prevProps.name}
        state data with props inside constructor: ${prevState.stateNameWithPropsInsideConstructor}
        state with props by method: ${prevState.stateNameWithPropsByMethod}
        state by event: ${prevState.stateByEvent}
        place: getSnapshotBeforeUpdate`)
        return null
    }

    componentDidUpdate() {
        // print to check
        console.log(`
        props data: ${this.props.name}
        state data with props inside constructor: ${this.state.stateNameWithPropsInsideConstructor}
        state with props by method: ${this.state.stateNameWithPropsByMethod}
        state by event: ${this.state.stateByEvent}
        place: componentDidUpdate`)
    }
}

export default Lifecycle2