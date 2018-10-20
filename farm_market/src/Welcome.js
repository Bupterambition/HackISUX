import React from 'react';
import NavHeader from './NavHeader';

class Welcome extends React.Component {
	render() {

		const styles = {
			"textAlign": "center",
			"color": "#ffffff",
			"top": "75px",
			"position": "relative",
			"fontSize": "150%"
		};

		return (
            <div>
                <NavHeader />
                <div style={styles}>
				    <h1>Welcome to the online Farmer's Market!</h1>
				<p>Want to buy produce cheaply and easily? Well, you came to the right place.</p>
			    </div>
            </div>
		);
	}
}

export default Welcome;