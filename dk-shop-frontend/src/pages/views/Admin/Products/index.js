import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import {getProducts, removeProduct} from "actions/product";
import {getCategories} from "actions/category";
import {selectProducts, selectCategories} from "selectors";

import ProductsList from "./ProductList";

const mapStateToProps = (state) => ({
    products: selectProducts(state),
    categories: selectCategories(state),
  });
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        getProducts,
        getCategories,
        removeProduct,
      },
      dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsList));