import React, { Component } from 'react';

export default class ColorBox extends Component {

  ifFunc = () => {
    // debugger
    if(this.props.opacity >= 0.2){
      return <ColorBox opacity={this.props.opacity-0.1} />
    }
    else{
      return null
    }
  }
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.ifFunc()}
      </div>
    )
  }

}
