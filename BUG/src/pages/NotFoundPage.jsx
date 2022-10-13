import React, { Component } from 'react';
import photo from '../img/404.png'

class NotFoundPage extends Component {
  render() {
    return (
      <div className='position-relative'>
        <img src={photo} alt="" style={{width:"100%"}} />
      </div>
    )
  }
}

export default NotFoundPage;