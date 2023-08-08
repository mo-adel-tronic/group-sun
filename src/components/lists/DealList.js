import React from "react";
class DealList extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ul>
                {/* {[
                    <li key={'1'}>item 1</li>, 
                    <li key={'2'}>item 2</li>, 
                    <li key={'3'}>item 3</li>
                ]} */}
                 
               
                {
                    this.props.data.map(item => {
                        return <li key={item.id}>{`username is ${item.username}`}</li>
                    })
                }
            </ul>
        )
    }
}

export default DealList