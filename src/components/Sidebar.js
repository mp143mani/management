import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate = useNavigate()
    return <>
        <ul className="navbar-nav bg-success sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <div className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </div>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <Link to={'/dashboard'}>
                <li className="nav-item active">
                    <div className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></div>
                </li>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

       
            <li className="nav-item" onClick={() => navigate('/addstudent')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fa-solid fa-user-plus"></i>
                    <span>Add students Data</span>
                </div>
            </li>


            <li className="nav-item" onClick={() => navigate('/studentdetails')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                   <i class="fa-solid fa-circle-info fa-beat"></i>
                    <span>Students Details</span>
                </div>
            </li>


            <li className="nav-item" onClick={() => navigate('/addteacher')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fa-solid fa-user-plus"></i>
                    <span>Add Teachers Data</span>
                </div>
            </li>

            <li className="nav-item" onClick={() => navigate('/teacherdetails')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fa-solid fa-circle-info fa-beat"></i>
                    <span>Teachers details</span>
                </div>
            </li>


        </ul>
    </>
}

export default Sidebar

