import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


class Welcome extends React.Component {
	render() {
		return (
			<div className="welcome">
				<h1>Welcome to the online Farmer's Market!</h1>
				<p>Want to buy produce cheaply and easily? Well you came to the right place.</p>
			</div>
		);
	}
}

ReactDOM.render(
	<Welcome />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

