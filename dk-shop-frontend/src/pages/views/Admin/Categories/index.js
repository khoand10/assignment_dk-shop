import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import _ from "lodash";
import {getCategories} from "actions/category";
import {selectCategories} from "selectors"; 

const Categories = (props) => {
    useEffect(() => {
        console.log('vap day')
        props.getCategories();
    }, []);
    console.log('categories ', props.categories);
    const {categories} = props;
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Categories</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">All Categories</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    {/* <th scope="col">ID</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!_.isEmpty(categories) && Object.keys(categories).map((key, index) => (
                                    <tr key={index}>
                                        {/* <th scope="row">{key}</th> */}
                                        <td>{categories[key].name}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => console.log('remove', key)}>Xóa</button>
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
}

const mapStateToProps = (state) => ({
    categories: selectCategories(state),
  });
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getCategories,
      },
      dispatch
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
