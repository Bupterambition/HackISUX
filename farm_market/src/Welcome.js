import React from 'react';
import NavHeader from './NavHeader';

class Welcome extends React.Component {
	render() {

		const styles = {
			"textAlign": "center",
			"color": "#ffffff"
		};

		const h1Styles = {
			"fontSize" : "150%",
			"margin-top" : "30px"
		}

		return (
            <div style={styles}>
                <NavHeader />
                <div style={h1Styles}>
				    			<h1>Welcome to the online Farmer&#39;s Market!</h1>
									<p>Want to buy produce cheaply and easily? Well, you came to the right place.</p>
			    			</div>
            </div>
		);
	}
}

export default Welcome;
