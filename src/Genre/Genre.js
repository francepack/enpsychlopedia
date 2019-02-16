import React, { Component } from 'react';
import Bands from '../Bands/Bands.js';
import Controls from '../Controls/Controls.js';
import { all } from 'q';


export default class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBands: 'all'
    }
  }
 
getActivity = activity => {
  this.setState({currentBands: activity})
}

  render() {
    let bandsOrganized = this.props.sortedBands;
      console.log(this.state.currentBands)
    if (!bandsOrganized) { 
      return (
        <h1>Hi Sally!</h1>
      )
    }

   return (
    <section className='genre-container'>
      <div className='genre-title-container'>
        <h1>{this.props.genre.genre}</h1>
        <Controls getActivity={this.getActivity}
        />
      </div>
      <h1>{this.props.genreIndex}</h1>
      <Bands genreBands={this.props.sortedBands}
      />
    </section>
  )
   }
}

// export default Genre;