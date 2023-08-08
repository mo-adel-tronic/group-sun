 # Life Cycle

 [show a diagram for life cycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

 ## Mounting

 add new HTML to DOM [Mount](../src/components/lifecycle/Mount.js)

 ### Constructor

 1. If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component
 2. The constructor for a React component is called before it is mounted.
 3. you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
 4. Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.
 5. Avoid introducing any side-effects or subscriptions in the constructor. For those use cases, use componentDidMount() instead.

 ### getDerivedStateFromProps
  1. If you don’t passing props to state before render, you don’t need to implement a getDerivedStateFromProps for your React component
  2. The getDerivedStateFromProps for a React component is called before it is mounted and after constructor.
  3. params => \[props, state\]
  4. return => object has updates in state from props
  5. note that method is a static method | this method will be called again when update is happen

 ### Render
 1. render is required to add HTML to DOM

### componentDidMount
1. If you don’t have any updates or side effects after rendering data, you don’t need to implement a componentDidMount for your React component


## Updating

1. getDerivedStateFromProps if exists, will be the first method called after update data => props or state, state property that equaled to props will be changed by props only. this means that setState has no effect on it.
2. shouldComponentUpdate if exists:
    - if data was props: this method will not be called
    - if data was state: 
        - if state equal to props within getDerivedStateFromProps, this method will execute but has no effect on state.
        - if state not noticed at getDerivedStateFromProps method, this method will prevent render to execute if return false
3. getSnapshotBeforeUpdate(prevProps, prevState) if exists, will execute after render
4. componentDidUpdate if exists, will execute after update is finished

update HTML in DOM [Update](../src/components/lifecycle/Updating.js)
 
### shouldComponentUpdate
1. return a Boolean value that specifies whether React should continue with the  rendering or not.
2. The default value is true
3. in all cases, this method deal with state before any changes of it with value that taken in constructor, even if this change was implement in getDerivedStateFromProps

### getSnapshotBeforeUpdate
1. A snapshot value (or null) must be returned.
2. getSnapshotBeforeUpdate() should be used with componentDidUpdate().

## Unmounting

Remove HTML in DOM [Delete](../src/components/lifecycle/Unmount.js)

### componentWillUnmount 
if exists, will execute after removing component

test it