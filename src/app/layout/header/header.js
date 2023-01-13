import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const linkClass = "rounde mr-4 cursor-pointer hover:bg-gray-100 hover:rounded hover:text-gray-600 pr-1 pl-1";
    return (
        <div className={"grid h-24 bg-gray-600 border-b-0 border-b shadow shadow-mar-black"}>
            <div className={"flex justify-around items-center text-mar-blue-light-50"}>
                <Link to={'/*'} className={"cursor-pointer font-semibold text-2xl"}>Buğra Tuna</Link>
                <div className={"flex justify-around font-semibold"}>
                    <Link to={'home'} className={linkClass}>Anasayfa</Link>
                    <Link to={'about'} className={linkClass}>Hakkımda</Link>
                    <Link to={'contact'} className={linkClass}>İletişim</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;