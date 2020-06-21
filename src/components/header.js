import React from "react"
import { Link } from "gatsby"

const Header = () =>
{
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About Me </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact </Link>
                    </li>
                    <li>
                        <Link to="/research"> Research </Link>
                    </li>
                    <li>
                        <Link to="/publications"> Publications </Link>
                    </li>
                    <li>
                        <Link to="/blog"> Blog </Link>
                    </li>
                    <li>
                        <Link to="/photography"> Photography </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header