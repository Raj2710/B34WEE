import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import {UserContext} from './../App'

function SideBar() {

    let testcontext = useContext(UserContext);
    console.log('test context', testcontext)
  return <>
    <div>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link to='/dashboard'>
        <div className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
        </div>
    </Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

<li className="nav-item active">
    <Link to='/add-user'>
        <div className="nav-link">
            <i className="fa-solid fa-user-plus"></i>
            <span>Add User</span>
        </div>
    </Link>
</li>



</ul>
    </div>
  </>
}

export default SideBar