import { NavLink, Link } from "react-router-dom"

import "./TopNavbar.css"

export const TopNavbar = (props) => {
    return (
        <div className="top-navbar navbar">
            <Link to="/" className="logo">eMart</Link>
            <ul className="navbar-links">
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
            </ul>
        </div>
    )
}