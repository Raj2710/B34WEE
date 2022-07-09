import React from 'react'

function Card() {

  return (
    <div>
       <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top":"0.5rem",right:"0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            {
                              toggle?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
                                setCart((prev)=>prev-1)
                                setToggle(prev=>!prev)
                              }}>Remove</a></div>
                              </div>:
                              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
                                setCart((prev)=>prev+1)
                                setToggle(prev=>!prev)
                              }}>Add to cart</a></div>
                          </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Card