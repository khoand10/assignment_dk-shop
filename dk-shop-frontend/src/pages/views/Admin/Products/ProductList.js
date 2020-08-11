import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import Pagination from 'react-js-pagination';
import "bootstrap/dist/css/bootstrap.css";

const LENGTH_PER_PAGE = 10;
const PAGE_RANGER_DISPLAY = 5;

const ProductsList = ({ products = {} , history, getProducts, getCategories, categories, removeProduct}) => {
    
    const [activePage, setactivePage] = useState(1);

    useEffect(() => {
        getCategories();
        getProducts();
    }, [getCategories, getProducts]);
    const addNew = () => {
        history.push("/admin/product/new-product");
    }

    const handleRemove = (productID, productName) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: `Are you sure to remove ${productName}.`,
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    removeProduct(productID).then(
                        (res) => {
                            if (res.status !== 200) {
                                alert("Remove product fail!")
                            }
                        }
                    );
                }
              },
              {
                label: 'No',
              }
            ]
          });
    }

    let pagination;
    if (Object.keys(products).length <= LENGTH_PER_PAGE) {
        pagination = null;
    } else {
        pagination = (
            <Pagination
                pageRangeDisplayed={PAGE_RANGER_DISPLAY}
                activePage={activePage}
                itemsCountPerPage={LENGTH_PER_PAGE}
                totalItemsCount={Object.keys(products).length}
                onChange={(pageNumber) => setactivePage(pageNumber)}
                itemClass="page-item"
                linkClass="page-link"
            />
        );
    }
    const listProduct = Object.keys(products).slice((activePage - 1) * LENGTH_PER_PAGE, activePage * LENGTH_PER_PAGE);
    if (Object.keys(products) === 0 && Object.keys(listProduct).length !== 0) {
        this.setState({activePage: activePage - 1});
    }

    return (
        <div className='products'>
            <h1 className="h3 mb-2 text-gray-800">Products</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All Product</h6>
                    <Button className="button-add-new" variant="primary" onClick={() => addNew()}>{"New"}</Button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Sale Price</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Remove</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listProduct.map((key, index) => (
                                    <tr key={index}>
                                        <td>{_.get(products[key], 'name', '')}</td>
                                        <td><img src={_.get(products[key], 'image', '')} alt="" width="50" /></td>
                                        <td>{_.get(products[key], 'price', '')}</td>
                                        <td>{_.get(products[key], 'salePrice', '')}</td>
                                        <td>{_.get(categories[_.get(products[key], 'category_id', 'None')], 'name', '')}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => handleRemove(key, products[key].name)}>Remove</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => history.push(`/admin/product/${key}`)}>Edit</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        {pagination}
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
