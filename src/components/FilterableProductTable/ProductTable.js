import React from 'react';
import ProductCategoryTable from './ProductTable/ProductCategoryTable';

export default class ProductTable extends React.Component {
    render() {
        const products = this.props.products;
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        
        var categories = [];
        let lastCategory = null;

        products.forEach(
            (product) => {
                if(product.category !== lastCategory){
                    categories.push({name : product.category});
                }
                lastCategory = product.category;
            }
        );

        var categoryTable = []; 
        categories.forEach(
            (category) => {
                categoryTable.push(
                    <ProductCategoryTable 
                    categoryName={category.name} 
                    products={products} 
                    filterText={filterText} 
                    inStockOnly={inStockOnly}
                    />
                );
            }
        );

        return (
            <div>{categoryTable}</div>
        );
    }
}