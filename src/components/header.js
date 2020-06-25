import React from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/header.module.scss"

import myCV from "../files/CV_Abtin_Ameri.pdf"

const Header = () =>
{
    return (
        <header className={headerStyles.header}>            
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
                    <li>
                        <a href={myCV} download="CV_Abtin_Ameri.pdf"> <button className={headerStyles.btn}>  Download CV </button> </a> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header