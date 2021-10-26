import { NavLink, Link } from "react-router-dom"
import {useSelector} from 'react-redux'

import "./TopNavbar.css"

export const TopNavbar = (props) => {
    const count = useSelector(state => state.counter.count)
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
                <li>
                    <NavLink to="/counter">Counter | {count}</NavLink>
                </li>
            </ul>
        </div>
    )
}