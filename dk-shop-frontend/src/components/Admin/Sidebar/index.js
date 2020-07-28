import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <a className="nav-link" href="/admin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Managers
             </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/admin/products">
                    <i className="fas fa-tshirt" />
                    <span>Products</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="/admin/categories">
                    <i className="fas fa-boxes" />
                    <span>Categories</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="/admin/customers">
                    <i className="fas fa-users" />
                    <span>Customers</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
