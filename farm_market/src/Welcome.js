import React from 'react';
import SearchBar from './SearchBar';
import SaleGridList from './SaleGridList';

class Welcome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			location: "omaha"
		};

		this.onLocationChange = this.onLocationChange.bind(this);
	}

	onLocationChange(e) {

		console.log("location change to " + e);

		// this.setState("ames");

		// if (e.eventKey === 1) {
		// 	this.setState("iowa city")
		// } else if (e.eventKey === 2) {
		// 	this.setState("ames")
		// } else if (e.eventKey === 3) {
		// 	this.setState("omaha")
		// } else if (e.eventKey === 4) {
		// 	this.setState("all");
		// }
	}

	render() {
		const styles = {
			"textAlign": "center",
			"color": "#ffffff"
		};

		const h1Styles = {
			"fontSize" : "300%",
			"marginTop" : "30px"
		};

		const pStyles = {
			"fontSize" : "130%",
			"marginBottom" : "35px"
		};

		console.log("location is: " + this.state.location);

		return (
			<div>
				<div style={styles}>
					<h1 style={h1Styles}>Welcome to the Digital Harvest!</h1>
					<p style={pStyles}>Want to buy produce cheaply and easily? Well, you came to the right place.</p>
				</div>
				<div class="col-md-6 col-md-offset-3">
				<SearchBar onLocationChange={this.onLocationChange} />
				<SaleGridList location={this.state.location} />
				</div>
			</div>
		);
	}
}

export default Welcome;
