import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import _ from "lodash";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Button } from 'react-bootstrap';

import {getCategories, removeCategory} from "actions/category";
import {selectCategories} from "selectors";

const Categories = (props) => {
    useEffect(() => {
        props.getCategories();
    }, []);
    
    const handleRemove = (categoryId, categoryName) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: `Are you sure to remove ${categoryName}.`,
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    props.removeCategory(categoryId).then(
                        (res) => {
                            if (res.status !== 200) {
                                alert("Remove category fail!")
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

    const addNew = () => {
        props.history.push("/admin/category/new-category");
    }

    const {categories} = props;
    return (
        <div className="categories">
            <h1 className="h3 mb-2 text-gray-800">Categories</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All Categories</h6>
                    <Button className="button-add-new" variant="primary" onClick={() => addNew()}>{"New"}</Button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!_.isEmpty(categories) && Object.keys(categories).map((key, index) => (
                                    <tr key={index}>
                                        <td className="category-name">{categories[key].name}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => handleRemove(key, categories[key].name)}>Remove</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => props.history.push(`/admin/category/${key}`)}>Edit</button>
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

Categories.propTypes = {
    getCategories: PropTypes.object.isRequired,
    removeCategory: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    categories: selectCategories(state),
  });
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getCategories,
        removeCategory,
      },
      dispatch
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories));
