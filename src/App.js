import './App.css';
import Navigation from './Navigation';
import {useState} from 'react';

function App() {
  let [cart,setCart]=useState(0);
  let [toggle1,setToggle1] = useState(false)
  let [toggle2,setToggle2] = useState(false)
  let [toggle3,setToggle3] = useState(false)
  return <>
     <div>
        <Navigation data={{cart,setCart,setToggle1}}/>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        {/* <!-- Section--> */}
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
                              toggle1?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
                                setCart((prev)=>prev-1)
                                setToggle1(prev=>!prev)
                              }}>Remove</a></div>
                              </div>:
                              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
                                setCart((prev)=>prev+1)
                                setToggle1(prev=>!prev)
                              }}>Add to cart</a></div>
                          </div>
                            }
                        </div>
                    </div>

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
                              toggle2?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
                                setCart((prev)=>prev-1)
                                setToggle2(prev=>!prev)
                              }}>Remove</a></div>
                              </div>:
                              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
                                setCart((prev)=>prev+1)
                                setToggle2(prev=>!prev)
                              }}>Add to cart</a></div>
                          </div>
                            }
                        </div>
                    </div>

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
                              toggle3?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
                                setCart((prev)=>prev-1)
                                setToggle3(prev=>!prev)
                              }}>Remove</a></div>
                              </div>:
                              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!" onClick={()=>{
                                setCart((prev)=>prev+1)
                                setToggle3(prev=>!prev)
                              }}>Add to cart</a></div>
                          </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
    </div>
  </>
}

export default App;
