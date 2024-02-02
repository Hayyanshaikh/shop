import React from 'react'
import Navigation from '../../json_files/SidebarMenu'
import { Link, NavLink } from "react-router-dom";
import * as Icon from "@phosphor-icons/react";

const Sidebar = () => {
	return (
		<aside className="admin_sidebar bg-gray-100/50 border-r text-black flex-grow-0 flex-shrink-0 w-[250px] flex-[250px] fixed top-0 h-full md:self-stretch md:relative h-screen overflow-auto flex flex-col">
			<Link to="/" className="flex items-center p-4">
        <h1 className="text-black text-2xl font-bold">Logo</h1>
      </Link>
     	<menu className="p-4">
     		<ul className="flex flex-col gap-2">
     			{
     				Navigation.map((nav, key)=>(
		     			<li key={key}>
		     				<NavLink to={nav.link} className="sidebar_menu_item p-2 px-3 w-full flex transition hover:bg-orange-400 rounded flex gap-1 items-center">
		     					{nav.icon}
		     					<span className="text-sm font-semibold">{nav.title}</span>
		     				</NavLink>
		     			</li>
     				))
     			}
     		</ul>
     	</menu>
     	<Link className="flex gap-2 mt-auto items-center p-4 border-t">
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