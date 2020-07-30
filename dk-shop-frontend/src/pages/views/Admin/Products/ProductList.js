import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";

const ProductsList = ({ products = {} , history, getProducts, getCategories, categories}) => {
    useEffect(() => {
        getCategories();
        getProducts();
    }, []);
    return (
        <div className='products'>
            <h1 className="h3 mb-2 text-gray-800">Products</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All Product</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Remove</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!_.isEmpty(products) && Object.keys(products).map((key, index) => (
                                    <tr key={index}>
                                        <td>{_.get(products[key], 'name', '')}</td>
                                        <td><img src={_.get(products[key], 'image', '')} alt="" width="50" /></td>
                                        <td>{_.get(products[key], 'price', '')}</td>
                                        <td>{_.get(categories[_.get(products[key], 'category_id', '')], 'name', '')}</td>
                                        <td>
                                            <button className="btn btn-primary">Remove</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => history.push(`/admin/product/${key}`)}>Edit</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,

}
export default ProductsList;
