import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter , useParams} from "react-router-dom";
import { useForm } from "react-hook-form";

import {getProduct} from "actions/product";
import {selectProducts} from "selectors/index";

import { Form, Button, Alert } from 'react-bootstrap';

const ProductDetail = ({products, getProduct}) => {
    const {productId} = useParams();
    let { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div className='product-detail'>
            <h2>{'title'}</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="productName"
                        ref={register({
                            required: "Required",
                        })}
                    />
                    <Form.Text className="text-muted">
                    Name of category
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Description" rows="3" name="productDes"
                        ref={register({
                            required: "Required",
                        })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {'buttonName'}
                </Button>
            </Form>
        </div>
    )
}

ProductDetail.propTypes = {
    products: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: selectProducts(state),
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getProduct,
      },
      dispatch
    );
  }

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(ProductDetail));

