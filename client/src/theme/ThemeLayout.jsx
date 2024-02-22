import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const ThemeLayout = () => {
	
	return (
		<>
			<Header/>
			<main className="flex-1">
				<Outlet/>
			</main>
			<Footer/>
			<ScrollRestoration/>
		</>
	)
}

export default ThemeLayout