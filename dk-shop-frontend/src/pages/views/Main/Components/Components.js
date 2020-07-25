import React from "react";
import { connect } from "react-redux";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Main/Header/Header.js";
import Footer from "components/Main/Footer/Footer.js";
import GridContainer from "components/Main/Grid/GridContainer.js";
import GridItem from "components/Main/Grid/GridItem.js";
import Parallax from "components/Main/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Main/Header/HeaderLinks.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionDownload from "./Sections/SectionDownload.js";

import Product from "./Sections/Product";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="D&K Shop"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>{"D&K Shop"}</h1>
                <h3 className={classes.subtitle}>{"RA MẮT BỘ SƯU TẬP MỚI"}</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Product />
        <SectionCarousel />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("users ", state.users);
  return {
    todos: state.users,
  };
};

export default connect(mapStateToProps, null)(Components);
