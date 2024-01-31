import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { useSelector } from 'react-redux';

const ThemeLayout = () => {
	const navigate = useNavigate();
	const auth = useSelector(state => state.authentication.auth);

	useEffect(() => {
		if (auth) {
			navigate('/');
		}
		else{
			return;
		}
	}, [auth,navigate])
	
	return (
		<>
			<Header/>
			<main className="flex-1">
				<Outlet/>
			</main>
			<Footer/>
		</>
	)
}

export default ThemeLayout