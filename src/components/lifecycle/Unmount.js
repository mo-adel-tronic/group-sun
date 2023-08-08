import React from "react";

class Lifecycle3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
      }
      delElm = () => {
        this.setState({show: false});
      }
      componentWillUnmount() {
        console.log('element is deleted from lifecycle3')
      }
      render() {
        let myElement;
        /*
        Note: Conditional Rendering
        Method 1: using if condition
        Method 2: ternary operator, can use null when false to return nothing
        Method 3: inline if with logical && => {condition && true case} will scape false
        */
        if (this.state.show) {
            myElement = <Lifecycle3Child />;
        };
        return (
          <>
            {myElement}
            <button type="button" onClick={this.delElm}>Delete Header</button>
          </>
        );
      }
}

class Lifecycle3Child extends React.Component {
    componentWillUnmount() {
        console.log('element is deleted')
    }
    render() {
        return (
          <h1>this is child element</h1>
        );
    }
}

export default Lifecycle3