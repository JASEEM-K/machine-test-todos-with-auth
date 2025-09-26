import React from "react";

export const NavBar = () => {
    return (
        <div className="navbar-style">
            <img src="/logo.png" alt="listify logo" />
            <div className="hidden sm:flex space-x-5 justify-between items-center">
                <div>About Us</div>
                <div>Contancts</div>
            </div>
            <div className="flex sm:hidden h-8 w-8 ">
                <img src="/hamburger-menu.svg" alt="hamburger menu" />
            </div>
        </div>
    );
};
