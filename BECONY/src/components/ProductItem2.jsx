import React, { Component } from 'react'

export class ProductItem2 extends Component {
    render() {
        return (
            <div >
                <div className='mx-3 my-3'  style={{width:"238px"}}>
                    <span className='fw-bold fs-5'><i className="fa-solid fa-circle-arrow-right text-warning me-2"></i>{this.props.title}</span>
                    <p className='mt-3'>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default ProductItem2