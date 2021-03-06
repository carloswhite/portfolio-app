import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="lg:px-16 px-6 bg-gray-800 lg:py-0 py-2">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-yellow-500" className="inflex-flex items-center py-8 px-4 mr-4 text-gray-100 hover:text-yellow-500 text-3xl font-bold cursive tracking-widest">
                        @carloswhite
                    </NavLink>

                    <NavLink to="/about" activeClassName="text-yellow-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-yellow-500">
                        About Me
                    </NavLink>

                    <NavLink to="/post" exact activeClassName="text-yellow-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-yellow-500">
                        Project Blog
                    </NavLink>

                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/carlos-a-blanco01" className="mr-4" target="_blank" fgColor="#000000" bgColor="#4B7197" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/carloswhite" className="mr-4" target="_blank" fgColor="#000000" bgColor="#4B7197" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.behance.net/carlosblanco5" className="mr-4" target="_blank" fgColor="#222222" bgColor="#4B7197" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://dribbble.com/therealcarlosblanco" className="mr-4" target="_blank" fgColor="#222222" bgColor="#4B7197" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}