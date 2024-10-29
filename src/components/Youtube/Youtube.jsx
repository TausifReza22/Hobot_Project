import React from 'react'
import './Youtube.css'

function Youtube() {
    return (
        <>
            <div className='pads'>
                <div className="main-bg pads rounded-2">
                    <div class="row align-items-md-stretch">
                        <div class="col-md-6">
                            <div class="h-100 ">
                                <iframe width="100%" height="250" className='rounded-2' src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=f97NawvL__QQ3pqa&autoplay=1&mute=1&background=transparent" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="h-100 ">
                                <div className="buyer d-flex gap-4 pb-3">
                                    <div className="buy1 w-40">
                                        <p className=''>Buyer</p>
                                    </div>
                                    <div className="buy2 w-60">
                                        <p className=''>Supplier</p>
                                    </div>
                                </div>
                                <div className="star">
                                    <div className="donelogo">
                                        <p className='d-flex gap-2 align-items-center'>
                                            <span className="check-circle">
                                                <i className="fa-solid fa-check"></i>
                                            </span>
                                            <span className='text-white'>Post your requirements.</span>
                                        </p>
                                        <p className='d-flex gap-2 align-items-center'>
                                            <span className="check-circle">
                                                <i className="fa-solid fa-check"></i>
                                            </span>
                                            <span className='text-white'>Sit back for multiple suppliers to contact you.</span>
                                        </p>
                                        <p className='d-flex gap-2 align-items-center'>
                                            <span className="check-circle ">
                                                <i className="fa-solid fa-check"></i>
                                            </span>
                                            <span className='text-white'>Choose among the suppliers based on the
                                                ratings and reviews.</span>
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="all pads">
                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 pads ">
                            <h3 className='fw-bold'>Let Suppliers <span className='find'>Find You</span></h3>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 pads">
                        <button class="btn btn-danger btn-md" type="button">Get Verified</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Youtube
