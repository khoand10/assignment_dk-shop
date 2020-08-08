import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Main/Grid/GridContainer.js";
import GridItem from "components/Main/Grid/GridItem.js";
import Typography from '@material-ui/core/Typography';

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

import {getCategories} from "actions/category";
import {getProducts} from "actions/product";
import _ from "lodash";

const useStyles = makeStyles(styles);

const Product = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <h2>{"SẢN PHẨM MỚI"}</h2>
          </div>
          <br />
          <GridContainer>
            {!_.isEmpty(props.products) && Object.keys(props.products).map((key, index) => {
              const {categories, products} = props;
              const product = products[key];
              const category = categories[product.category_id];
              return (
                <GridItem xs={12} sm={2}>
                  <img
                    src={product.image}
                    alt="..."
                    className={classes.imgRounded + " " + classes.imgFluid}
                  />
                  <Typography gutterBottom variant="subtitle1">
                    {`price: ${product.price} $`}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    {`price: ${product.salePrice} $`}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    {`Category: ${category.name}`}
                  </Typography>
                  <h4>{product.name}</h4>
                </GridItem>
              )
            })}
            {/* <GridItem xs={12} sm={2}>
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h4>Rounded Image</h4>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={image}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />
              <h4>Circle Image</h4>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h4>Rounded Raised</h4>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
              <h4>Circle Raised</h4>
            </GridItem> */}
          </GridContainer>
          <GridContainer />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCategories,
      getProducts,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
