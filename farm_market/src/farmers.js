import React, { Component } from 'react';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import FarmerGrid from './FarmerGrid';

class Farmers extends Component {
  render() {

    const h3Styles = {
      "textAlign" : "center",
      "color" : "rgb(230, 255, 240)"
    }

    return (
       <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <Welcome />
        <h3 style={h3Styles}>View Farmer&#39;s Market growers here by viewing farmer&#39;s profiles</h3>
        <FarmerGrid />
      </div>
    );
  }
}

export default Farmers;
