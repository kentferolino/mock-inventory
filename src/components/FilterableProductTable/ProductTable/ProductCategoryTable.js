import React from 'react';
import ProductRow from './ProductRow';

export default class ProductCategoryTable extends React.Component {
    render() {
        const categoryName = this.props.categoryName;
        const products = this.props.products;
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let productName1 = null
        const rows = [];

        products.forEach(
            (product) => {
                if(product.category === categoryName){
                    if(inStockOnly && !product.stocked){
                        return;
                    }
                    else if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
                        return;
                    }
                    else{
                        productName1 = product.name;
                        rows.push(
                            <ProductRow product={product} />
                        );
                    }
                }
            }
        );

        return (
            <div>
                <label>{categoryName}</label>
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stocked</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            <br />
            </div>
        )
    }
}