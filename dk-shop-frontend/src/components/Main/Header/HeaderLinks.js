/*eslint-disable*/
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, withRouter } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/Main/CustomDropdown/CustomDropdown.js";
import Button from "components/Main/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import {logout} from "actions/authenticate";

const useStyles = makeStyles(styles);

function HeaderLinks(props) {
  const classes = useStyles();
  const logout = () => {
    props.logout();
    localStorage.removeItem("app-userid", null);
    props.history.push("/");
  }
  let stateLogin = (
    <CustomDropdown
        noLiPadding
        buttonText={`Login`}
        buttonProps={{
          className: classes.navLink,
          color: "transparent"
        }}
        dropdownList={[
          <Link to="/register" className={classes.dropdownLink}>
            {"Register"}
          </Link>,
          <Link to="/login-page" className={classes.dropdownLink}>
            {"Login"}
          </Link>,
        ]}
      />
  );
  if (props.user) {
    stateLogin = (
      <CustomDropdown
        noLiPadding
        buttonText={`Xin chào ${props.user.fullname}`}
        buttonProps={{
          className: classes.navLink,
          color: "transparent"
        }}
        dropdownList={[
          <Link to="/profile-page" className={classes.dropdownLink}>
            {"Profile"}
          </Link>,
          // <Link to="/logout" className={classes.dropdownLink}>
          //   {"Logout"}
          // </Link>,
          <a
            // href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
            target="_blank"
            className={classes.dropdownLink}
            onClick={logout}
          >
            {"Logout"}
          </a>
        ]}
      />
    )
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Categories"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Nam
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Nữ
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Button
          target="_blank"
          color="transparent"
          className={classes.navLink}
          onClick={() => props.history.push('/login-page')}
        >
          {'SIGN IN'}
        </Button> */}
        {stateLogin}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
          target="_blank"
          className={classes.navLink}
        >
          <i className="fas fa-shopping-cart"/>
        </Button>
      </ListItem>
    </List>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderLinks));
