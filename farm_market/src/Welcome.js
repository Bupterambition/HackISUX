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

		let newLoc = "";
		if (e == 1) {
			newLoc = "ames";
		} else if (e == 2) {
			newLoc = "omaha";
		} else if (e == 3) {
			newLoc = "iowa city";
		} else {
			newLoc = "all";
		}

		this.setState({
			location: newLoc
		});
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
