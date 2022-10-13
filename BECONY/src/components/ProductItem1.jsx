import React, { Component } from 'react';

 class ProductItem1 extends Component {
  render() {
    return (
        <div className="card border rounded-0 m-2 p-0"  style={{width:"300px"}} id="articleCard">
        <img src={this.props.photo} className="card-img-top rounded-0" alt="..." style={{width:"300px",height:"195px"}} />
        <div className='bg-warning d-flex justify-content-center align-items-center' id='top'>{this.props.name}</div>
        <div className="card-body px-4 pb-4 d-flex flex-column justify-content-between" >
            <h4 className="card-title fw-bolder pe-4 text-dark">{this.props.title}</h4>
            <p className="card-text pe-2 text-secondary">{this.props.text}</p>
            <p className=" border-0 border-top border-secondary rounded-0 text-muted fw-semibold p-0 m-0 pt-3">{this.props.comment}</p>
        </div>
    </div>

    )
  }
}

export default ProductItem1;