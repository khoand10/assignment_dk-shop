import React, { useState, useEffect } from "react";
import PropsTypes from "prop-types";
import { withRouter } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Main/Header/Header.js";
import HeaderLinks from "components/Main/Header/HeaderLinks.js";
import Footer from "components/Main/Footer/Footer.js";
import GridContainer from "components/Main/Grid/GridContainer.js";
import GridItem from "components/Main/Grid/GridItem.js";
import Button from "components/Main/CustomButtons/Button.js";
import Card from "components/Main/Card/Card.js";
import CardBody from "components/Main/Card/CardBody.js";
import CardHeader from "components/Main/Card/CardHeader.js";
import CardFooter from "components/Main/Card/CardFooter.js";
import CustomInput from "components/Main/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  // useEffect(() => {
  //   console.log("new userlogin ", props.userLogin);
  //   if (!props.userLogin) {
  //     return;
  //   }
  //   if (props.userLogin !== "") {
  //     // eslint-disable-next-line react/prop-types
  //     props.history.push("/");
  //   } else {
  //     console.log("login fail");
  //   }
  // }, [props.userLogin]);

  const handleSignIn = () => {
    const isLogin = props.login(username, password);
    if (isLogin) {
      // eslint-disable-next-line react/prop-types
      props.history.push("/");
    } else {
      console.log("login fail");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="D&K Shop"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
                  <CardBody>
                    <CustomInput
                      labelText="Username"
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        value: username,
                        onChange: (e) => setUsername(e.target.value),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        onKeyPress: handleKeyDown,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={handleSignIn}
                    >
                      {"SIGN IN"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  login: PropsTypes.func.isRequired,
  userLogin: PropsTypes.string.isRequired,
};

export default withRouter(LoginPage);
