import React from 'react'

const Footer = () => {
	let currentTime = new Date()

	return (
		<footer>
			<p>&copy;{currentTime.getFullYear()}</p>
		</footer>
	)
}

export default Footer