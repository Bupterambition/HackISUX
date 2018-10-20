import React, { Component } from 'react';
import Welcome from './Welcome';
import SearchBar from './SearchBar';

class App extends Component {
  render() {

    const styles = {
		};

    return (
      <div style={styles}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <Welcome />
        <div class="col-md-6 col-md-offset-3">
  				<SearchBar />
        </div>
      </div>
    );
  }
}

export default App;