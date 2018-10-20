import React from 'react';
import NavHeader from './NavHeader';

class Welcome extends React.Component {
	render() {

		const styles = {
			"textAlign": "center",
			"color": "#ffffff"
		};

		const h1Styles = {
			"fontSize" : "300%",
			"marginTop" : "30px"
		}

		const pStyles = {
			"fontSize" : "130%",
			"marginBottom" : "35px"
		}

		return (
            <div style={styles}>
                <NavHeader />
				    			<h1 style={h1Styles}>Welcome to the online Farmer&#39;s Market!</h1>
									<p style={pStyles}>Want to buy produce cheaply and easily? Well, you came to the right place.</p>
            </div>
		);
	}
}

export default Welcome;
