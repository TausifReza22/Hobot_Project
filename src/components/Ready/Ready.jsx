import React from 'react'

function Ready() {
    return (
        <>
            <div class="row align-items-md-stretch container">
                <div class="col-md-6">
                    <div class="h-100 pads  rounded-3">
                        <h2 className='fw-bold pb-2'>Ready to dive into HABOT?</h2>
                        <p className='pb-2'>Signing up with HABOT opens the door to a world of new opportunities
                            and potential for business growth. Gain access to a vibrant community
                            of like-minded individuals, unlock valuable resources, and take the first
                            step towards realizing your entrepreneurial dreams..</p>
                        <button type="button" class="btn btn-success">Sign up today! <span> <i class="fa-solid fa-arrow-right-long "></i> </span>
                        </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 pads d-flex flex-column gap-3">
                        <p className="paira"></p>
                        <div className="one-bt d-flex gap-3">
                            <button type="button" class="btn btn-outline-danger hover-effect w-50 text-dark">Abu Dhabi</button>
                            <button type="button" class="btn btn-outline-danger hover-effect w-50 text-dark">Dubai</button>
                        </div>
                        <div className="one-bt d-flex gap-3">
                            <button type="button" class="btn btn-outline-danger hover-effect w-50 text-dark">Sharjah & Ajman</button>
                            <button type="button" class="btn btn-outline-danger hover-effect w-50 text-dark">Fujairah</button>
                        </div>
                        <div className="one-bt d-flex gap-3">
                            <button type="button" class="btn btn-outline-danger hover-effect w-50 text-dark">Ras Al Khaimah</button>
                            <button type="button" class="btn btn-outline-danger hover-effect w-50 text-dark">Umm Al Quwain</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Ready
