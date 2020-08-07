import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter , useParams} from "react-router-dom";

import {newCategory, getCategory, updateCategory} from "actions/category";
import {selectCategories} from "selectors/index";

import { Form, Button, Alert } from 'react-bootstrap';

const CategoryDetail = (props) => {
    const {categoryId} = useParams();
    const [categoryName, setCategoryName] = useState('');
    const [categoryDes, setCategoryDes] = useState('');
    const [message, setMessage] = useState('');
    const title = categoryId === "new-category" ? "New Category" : "Update Category";
    const buttonName = categoryId === "new-category" ? "Save" : "Update";

    useEffect(() => {
        if (categoryId !== "new-category") {
            let currentCategory = props.categories[categoryId] || null;
            if (currentCategory) {
                setCategoryName(currentCategory.name);
                setCategoryDes(currentCategory.description);
            } else {
                getCategory(categoryId).then(
                    (res) => {
                        if (res.status === 200) {
                            currentCategory = res.data;
                            setCategoryName(currentCategory.name);
                            setCategoryDes(currentCategory.description);
                        }
                    }
                )
            }
        }
    }, []);

    const save = async (event) => {
        event.preventDefault();
        let newCategory = {
            name: categoryName,
            description: categoryDes,
        }
        let rs;
        if (categoryId === "new-category") {
            rs = await props.newCategory(newCategory);
            if (rs.status === 200) {
                props.history.push(`/admin/category/${rs.data.id}`);
                setMessage("Create Success!")
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            }
        } else {
            newCategory.id = categoryId;
            rs = await props.updateCategory(newCategory)
            if (rs.status === 200) {
                setMessage("Update Success!")
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            }
        }
    }

    return (
        <div className='category-detail'>
            <h2>{title}</h2>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="categoryName"
                        onChange={(e) => setCategoryName(e.target.value)}
                        value={categoryName}
                    />
                    <Form.Text className="text-muted">
                    Name of category XXXX
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Description" rows="3" name="categoryDes"
                        onChange={(e) => setCategoryDes(e.target.value)}
                        value={categoryDes}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={save}>
                    {buttonName}
                </Button>
                {message.length !== 0 && <Alert className='message' variant={'success'}>{message}</Alert>}
            </Form>
        </div>
    )
}

CategoryDetail.propTypes = {
    newCategory: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    updateCategory: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: selectCategories(state),
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        newCategory,
        updateCategory,
      },
      dispatch
    );
  }

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(CategoryDetail));

