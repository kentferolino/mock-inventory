import React from 'react';

export default class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr col-span="3">
                {category}                
            </tr>
        )
    }
}