import React from 'react';
import Navbar from "./Navbar"
function About () {
	return <div>
		<Navbar />
		<h2>GeeksforGeeks is a computer science portal for geeks!</h2>

		Read more about us at :
		<a href="https://www.geeksforgeeks.org/about/">
			https://www.geeksforgeeks.org/about/
		</a>
	</div>
}
export default About;
