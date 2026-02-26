import NavItem from "./NavItem.jsx";
import {ChangePageContext, navItems} from "../utils/constants.js";
import {useContext} from "react";

const Nav = () => {
    const changePage = useContext(ChangePageContext);
    return (
        <nav className="fixed top-2 left-12 flex gap-4">

                {navItems.map(item  => <NavItem changePage={changePage} itemTitle={item} key={item}/>)}
        </nav>
    )
}

export default Nav;