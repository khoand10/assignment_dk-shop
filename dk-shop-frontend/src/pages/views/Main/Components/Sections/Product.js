import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Main/Grid/GridContainer.js";
import GridItem from "components/Main/Grid/GridItem.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

const Product = () => {
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
            <GridItem xs={12} sm={2}>
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
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
      </div>
    </div>
  );
};

export default Product;
