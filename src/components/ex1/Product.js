import React from "react";
class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data
        return (
            <div className="product-card">
                <h1>{data.title}</h1>
                <img src={data.image} />
                <p>{data.description}</p>
                <div className="product-footer">
                    <div>{data.price}</div>
                    <div>{data.category}</div>
                </div>
            </div>
        )
    }

}

export default Product