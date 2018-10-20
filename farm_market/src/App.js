import React, { Component } from 'react';
import Welcome from './Welcome';

class App extends Component {
  render() {

    const styles = {
			"backgroundColor": "#4e7a4a"
		};

    return (
      <div style={styles}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <Welcome />
      </div>
    );
  }
}

export default App;