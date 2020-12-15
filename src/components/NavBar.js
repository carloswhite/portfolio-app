import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <header className="bg-gray-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-yellow-500" className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-yellow-500 text-3xl font-bold cursive tracking-widest">
                        @carloswhite
                    </NavLink>

                    <NavLink to="/post" exact activeClassName="text-yellow-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-yellow-500">
                        Blog
                    </NavLink>

                    <NavLink to="/project" activeClassName="text-yellow-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-yellow-500">
                        Projects
                    </NavLink>

                    <NavLink to="/about" activeClassName="text-yellow-400" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-yellow-500">
                        About Me
                    </NavLink>
                </nav>
                <div>
                    
                </div>
            </div>
        </header>
    )
}