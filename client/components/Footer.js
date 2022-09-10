import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Footer = () => {
  return (
    <div>
        <section className="footer-2 section-padding gray-bg pb-5" style={{ marginTop: 150 }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="subscribe-footer text-center">
                        <div className="form-group mb-0">
                                <h2 className="mb-3">Stay in the Loop</h2>
                                <p className="mb-4">Subscribe to our newsletter for updates, outfit inspirations, and tips.</p>
                                <div className="form-group form-row align-items-center mb-0" style={{ display: 'flex'}}>
                                    <div className="col-sm-9">
                                    <input type="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="col-sm-3">
                                    <a href="#" className="btn btn-dark ">Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-btm mt-5 pt-4 border-top">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="list-inline footer-socials-2 text-center">
                            <li className="list-inline-item"><a href="#">Privacy policy</a></li>
                            <li className="list-inline-item"><a href="#">Support</a></li>
                            <li className="list-inline-item"><a href="#">About</a></li>
                            <li className="list-inline-item"><a href="#">Contact</a></li>
                            <li className="list-inline-item"><a href="#">Terms</a></li>
                            <li className="list-inline-item"><a href="#">Category</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="copyright text-center ">
                                @ copyright all reserved to StyleMe-2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>	
    </div>
  )
}

/**
 * CONTAINER
 */

export default connect()(Footer)
