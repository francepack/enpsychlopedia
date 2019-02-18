import React, { Component } from 'react';
import Band from '../Band/Band.js';
import Popup from '../Popup/Popup.js';

export default class Bands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [],
      inactive: [],
      currentPopup: {}
    }
  }

  assignActiveBands() {
    let activeBands = this.props.genreBands.filter(band => {
      return band.active === true;
      })
    this.setState({active: activeBands})
  }

  assignInactiveBands() {
    let inactiveBands = this.props.genreBands.filter(band => {
      return band.active === false;
      })
    this.setState({inactive: inactiveBands})
  }

  componentWillReceiveProps() {
    this.assignActiveBands();
    this.assignInactiveBands();
  }

  fetchCurrentBand = (band) => {
    this.setState({currentPopup: band})
  }

  render() { 
  let fallback = this.props.currentSelection;
  let currentFilter;
  
  if(this.props.currentSelection === 'all') {
    currentFilter = this.props.genreBands
  } else if (this.props.currentSelection === 'active') {
    currentFilter = this.state.active
  } else {
    currentFilter = this.state.inactive
  }
  
  if (!fallback) { 
    return (
      <h1>Hi Sally!</h1>
    )
  }

  let popup;
  if(this.state.currentPopup.image) {
    popup = <Popup 
    currentBandInfo={this.state.currentPopup}
  />
  } else {
    popup = <h1>hi</h1>
  }

  return (
    <section className='bands-wrapper'>
      {currentFilter.map((band, index) => (
        <Band 
          key={index}
          band={band}
          fetchBand={this.fetchCurrentBand}
        />
      ))}
      {popup}
    </section>
  )
  }
}