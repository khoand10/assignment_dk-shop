import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter , useParams} from "react-router-dom";

import { Form, Button, Alert, ProgressBar} from 'react-bootstrap';
import {getCategories} from "actions/category";
import {newProduct, getProduct} from "actions/product";
import {selectCategories, selectProducts} from "selectors";
import {storage} from '../../../../firebase';
import _ from "lodash";

const ProductDetail = (props) => {
    const {productId} = useParams();
    const [productName, setProductName] = useState('');
    const [productDes, setProductDes] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productSalePrice, setProductSalePrice] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const [message, setMessage] = useState('');
    const [progress, setprogress] = useState(null);
    const title = productId === "new-product" ? "New product" : "Update Product";
    const buttonName = productId === "new-product" ? "Save" : "Update";

    useEffect(() => {
        props.getCategories();
        if (productId !== "new-product") {
            let currentProduct = props.products[productId] || null;
            if (currentProduct) {
                setProduct(currentProduct);
            } else {
                getProduct(productId).then(
                    (res) => {
                        if (res.status === 200) {
                            currentProduct = res.data;
                            setProduct(currentProduct);
                        }
                    }
                )
            }
        }
    }, []);

    const setProduct = (currentProduct) => {
        setProductName(currentProduct.name);
        setProductDes(currentProduct.description);
        setProductPrice(currentProduct.price);
        setProductSalePrice(currentProduct.salePrice);
        setCategoryID(currentProduct.category_id);
        setImageUrl(currentProduct.image);
    }

    const save = async (event) => {
        event.preventDefault();
        let newProduct = {
            name: productName,
            image: imageUrl,
            price: productPrice,
            salePrice: productSalePrice,
            description: productDes,
            category_id: categoryID
        };
        let rs;
        if (productId === "new-product") {
            rs = await props.newProduct(newProduct);
            if (rs.status === 200) {
                props.history.push(`/admin/product/${rs.data.id}`);
                setMessage("Create Success!")
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            }
        } else {
            newProduct.id = productId;
            rs = await props.updateProduct(newProduct)
            if (rs.status === 200) {
                setMessage("Update Success!")
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            }
        }
    }

    const handleUploadFile = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            uploadFile(image);
          }
    }

    const uploadFile = (image) => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setprogress(progress);
        }, 
        (error) => {
          console.log(error);
        }, 
      () => {
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              setImageUrl(url)
          })
      });
    }

    return (
        <div className='product-detail'>
            <h2>{title}</h2>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="productName"
                        onChange={(e) => setProductName(e.target.value)}
                        value={productName}
                    />
                    <Form.Text className="text-muted">
                    Name of product
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>DescriptionXX</Form.Label>
                    <Form.Control as="textarea" placeholder="Description" rows="3" name="productDes"
                        onChange={(e) => setProductDes(e.target.value)}
                        value={productDes}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="price" name="productPrice"
                        onChange={(e) => setProductPrice(e.target.value)}
                        value={productPrice}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Sale Price</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="productSaleProce"
                        onChange={(e) => setProductSalePrice(e.target.value)}
                        value={productSalePrice}
                    />
                </Form.Group>
                <Form.Group controlId="category.ControlSelect1">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" value={categoryID} onChange={(e) => setCategoryID(e.target.value)}>
                        {!_.isEmpty(props.categories) && Object.keys(props.categories).map((key, index) => (
                            <option key={index} value={key}>{props.categories[key].name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <ProgressBar now={progress} label={`${progress}%`} />
                    <Form.File id="imageFormControlFile1" label="Image" onChange={handleUploadFile} />
                    <br/>
                    <img src={imageUrl || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="100" width="200"/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={save}>
                    {buttonName}
                </Button>
                {message.length !== 0 && <Alert className='message' variant={'success'}>{message}</Alert>}
            </Form>
        </div>
    )
}

ProductDetail.propTypes = {
}

const mapStateToProps = (state) => ({
    categories: selectCategories(state),
    products: selectProducts(state),
  });
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getCategories,
        newProduct,
      },
      dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetail));

