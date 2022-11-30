import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Header =()=>  {
    return (
        <div className={"grid h-24 bg-gray-600 border-b-0 border-b shadow shadow-mar-black"}>
            <div className={"flex justify-around items-center text-mar-blue-light-50"}>
                <Link to={'/*'} className={"cursor-pointer font-semibold text-2xl"}>Buğra Tuna</Link>
                <div className={"flex justify-around font-semibold"}>
                    <Link to={'home'} className={"mr-4 cursor-pointer"}>Anasayfa</Link>
                    <Link to={'about'} className={"mr-4 cursor-pointer"}>Hakkımda</Link>
                    <Link to={'contact'} className={"mr-4 cursor-pointer"}>İletişim</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;