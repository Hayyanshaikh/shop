import React from 'react'
import Navigation from '../../json_files/SidebarMenu'
import { Link, NavLink } from "react-router-dom";
import * as Icon from "@phosphor-icons/react";

const Sidebar = () => {
	return (
<<<<<<< HEAD
		<aside className="admin_sidebar bg-gray-100/50 border-r z-[9999] text-black flex-grow-0 flex-shrink-0 w-[250px] flex-[200px] fixed top-0 h-full md:self-stretch md:relative h-screen flex flex-col md:left-0 -left-[250px]">
=======
		<aside className="admin_sidebar bg-gray-900 border-r z-[9999] text-white flex-grow-0 flex-shrink-0 w-[250px] flex-[250px] fixed top-0 h-full md:self-stretch md:relative h-screen flex flex-col md:left-0 -left-[250px]">
>>>>>>> 718f09195aedcb8199adeff264dd4cdc69910ec9
			<div className="flex items-center justify-between p-4 relative">
				<Link to="/" className="flex items-center">
	        <h1 className="text-white text-2xl font-bold">Logo</h1>
	      </Link>
			</div>
     	<menu className="p-4">
     		<ul className="flex flex-col gap-2">
     			{
     				Navigation.map((nav, key)=>(
		     			<li key={key}>
<<<<<<< HEAD
		     				<NavLink to={nav.link} className="sidebar_menu_item p-2 px-3 w-full flex transition rounded flex gap-2 items-center">
		     						{nav.icon}
		     					<span className="text-sm font-medium">{nav.title}</span>
=======
		     				<NavLink to={nav.link} className="sidebar_menu_item p-2 px-3 w-full flex transition hover:bg-orange-400 hover:text-black rounded flex gap-2 items-center">
		     					{nav.icon}
		     					<span className="text-sm">{nav.title}</span>
>>>>>>> 718f09195aedcb8199adeff264dd4cdc69910ec9
		     				</NavLink>
		     			</li>
     				))
     			}
     		</ul>
     	</menu>
     	<Link className="flex gap-2 mt-auto items-center p-4 border-t border-gray-800">
    	 	<Icon.UserCircle size={20} weight="duotone" />
     		<div className="flex gap-2 items-center flex-1 justify-between">
     			<h6 className="text-sm font-semibold">Profile Name</h6>
    		 	<Icon.CaretRight size={15} weight="bold" />
     		</div>
     	</Link>
		</aside>
	)
}

export default Sidebar;