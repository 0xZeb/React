import React, { Component } from 'react';

class PlayerBar extends Component {
  render(){
    return (

      <section className="player-bar">

      <section id="buttons">
         <button id="previous" onClick={this.props.handlePrevClick}>
           <span className="ion-skip-backward"></span>
         </button>
         <button id="play-pause" onClick={this.props.handleSongClick} >
           <span className ={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
         </button>
         <button id="next" onClick={this.props.handleNextClick}>
           <span className="ion-skip-forward"></span>
         </button>
       </section>

       <section id = "time-control">
         <div className = "current-time">{ this.props.currentTime }</div>
         <input
            type = "range"
            className = "seek-bar"
            value = {  this.props.sliderPos || 0}
            max = "1"
            min ="0"
            step = "0.01"
            onChange={this.props.handleTimeChange}
         />
         <div className = "total-time" >{ this.props.duration }</div>
       </section>

       <section id = "volume-control">

         <span className="icon ion-volume-low" > </span>
         <span>
           <input
                type = "range"
                className="seek-bar"
                max = "1"
                min ="0"
                step = "0.01"
                value = { this.props.volume }
                onChange={this.props.changeVolume}

           />
         </span>
         <span className="icon ion-volume-high"> </span>

      

       </section>


      </section>
    );
  }
}

export default PlayerBar;
