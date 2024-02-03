import React from 'react'

const Header = ({heading}) => {
	return (
		<div className="admin_header text-black p-4 sticky top-0 border-b">
			<h2 className="font-semibold text-xl text-black capitalize">{heading}</h2>
		</div>
	)
}

export default Header;