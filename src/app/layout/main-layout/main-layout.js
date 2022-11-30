import {BrowserRouter, Routes, Route, useNavigate, Link} from "react-router-dom";
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";
import Header from "../header/header";
import SidebarLeft from "../sidebar-left/sidebar-left";
import SidebarRight from "../sidebar-right/sidebar-right";
import Footer from "../footer/footer";
import React from "react";



export default function MainLayout () {
    // const navigate = useNavigate();

    return (
        <BrowserRouter>
            <div className={"grid items-stretch max-h-screen"} >
                <div className={"grid items-start"}>
                    <Header></Header>
                    <div className={"bg-gray-100"} style={{height:'1300px'}}>
                        <div className={"flex justify-between mb-2 mt-10"}>
                            <SidebarLeft></SidebarLeft>
                            <Routes>
                                <Route>
                                    <Route index element={<Home/>}/>
                                    <Route path="about" element={<About/>}/>
                                    <Route path="contact" element={<Contact/>}/>
                                    <Route path="*" element={<Home/>}/>
                                </Route>
                            </Routes>
                            <SidebarRight></SidebarRight>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
}