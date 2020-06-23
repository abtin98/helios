import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"
import mitCampus from "../images/mit-campus.jpg"


const Header = () =>
{
    return (
        <header className={headerStyles.header}>
            <img src={mitCampus} alt="MIT Campus" />
            <h1
            className={headerStyles.centered}
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease-out-back"
            >
                <Link className={headerStyles.title} to="/">
                    Abtin Ameri
                </Link>
            </h1>
            
            <nav>
                <ul className={headerStyles.navList} >
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"> Home </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about"> About Me </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact"> Contact </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/research"> Research </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/publications"> Publications </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog"> Blog </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/photography"> Photography </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header