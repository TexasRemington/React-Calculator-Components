import React, { Component } from 'react';

class Key extends Component {
  render() {
    return (


    <button type={ this.props.type } className={ this.props.className } value={ this.props.value } />
    )
  }
}

export default Key;
