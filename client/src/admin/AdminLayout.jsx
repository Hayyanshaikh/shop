import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'

const AdminLayout = () => {
	return (
		<>
			<Header/>
			<div className="admin_main flex flex-grow">
				<Sidebar/>
				<main className="admin_content flex-1 p-4 bg-white">
					<Outlet/>
				</main>
			</div>
			<Footer/>
		</>
	)
}

export default AdminLayout