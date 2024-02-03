import React, {useEffect} from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx';

const AdminLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();
  const currentUrl = location.pathname;
	const updatedURL = currentUrl.split("/").pop();

	useEffect(() => {
		if (currentUrl === "/admin") {
			navigate("dashboard");
		}
	}, []);

	return (
		<>
			<div className="admin_main flex flex-grow">
				<Sidebar/>
				<main className="admin_content flex flex-col flex-1 h-screen overflow-auto">
					<Header heading={updatedURL}/>
					<div className="flex-1 p-4 bg-white">	
						<Outlet/>
					</div>
					<Footer/>
				</main>
			</div>
		</>
	)
}

export default AdminLayout;