import React from 'react';
import SearchBar from './SearchBar';
import SaleGridList from './SaleGridList';

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
			<div>
				<div style={styles}>
					<h1 style={h1Styles}>Welcome to the Digital Harvest!</h1>
					<p style={pStyles}>Want to buy produce cheaply and easily? Well, you came to the right place.</p>
				</div>
				<div class="col-md-6 col-md-offset-3">
				<SearchBar />
				<SaleGridList />
				</div>
			</div>

		);
	}
}

export default Welcome;
