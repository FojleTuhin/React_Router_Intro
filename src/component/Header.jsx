import {NavLink } from "react-router-dom";

const Header = () => {

    
    return (
        <div>
           
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;