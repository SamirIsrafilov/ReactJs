import React, { Component } from 'react'

 class ProductItem extends Component {
  render() {
    return (
        <div className="card border-0 rounded-0 m-3"   style={{width:"392px"}}>
        <img src={this.props.photo} className="card-img-top" alt="..." style={{width:"390px"}} />
        <div className="card-body px-4 pb-4" id='kartBody'>
            <h4 className="card-title text-muted fw-bolder">{this.props.title}</h4>
            <p className="card-text pe-5 text-secondary">{this.props.text}</p>
            <a href="#" className="btn border-0 border-bottom border-dark rounded-0 text-dark fw-semibold">{this.props.button}<span className='mx-2'><i className={this.props.icon}></i></span></a>
        </div>
    </div>

    )
  }
}

export default ProductItem;