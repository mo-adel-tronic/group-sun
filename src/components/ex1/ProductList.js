import React from "react";
import Product from "./Product";
import productData from "./productData";
import './productStyle.css'

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {productData: productData}
    }

    // check if data is a valid json
    isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    getProducts(items) {
        let products = JSON.parse(items)
        return products.map((product) => {
            return <Product data={product} key={product.id} />
        })
    }

    render() {
        return (
            this.isJsonString(this.state.productData) &&
            <div className="product-list">
                {this.getProducts(this.state.productData)}
            </div>
            
        )
    }
}

export default ProductList