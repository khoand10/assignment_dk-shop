import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import LandingPage from '../pages/views/Main/LandingPage/LandingPage';
import Components from '../pages/views/Main/Components/Components';
import LoginPage from '../pages/views/Main/LoginPage';
import ProfilePage from '../pages/views/Main/ProfilePage/ProfilePage';

import { createBrowserHistory } from "history";
var hist = createBrowserHistory();


const Routers = ({ products, onRemove }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    {/* <LayoutMain> */}
                        {/* <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch> */}
                        <Router history={hist}>
                            <Switch>
                                <Route path="/landing-page" component={LandingPage} />
                                <Route path="/profile-page" component={ProfilePage} />
                                <Route path="/login-page" component={LoginPage} />
                                <Route path="/" component={Components} />
                            </Switch>
                        </Router>
                    {/* </LayoutMain> */}
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
