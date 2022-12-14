import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">React-Devs-Hub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/devs" className="nav-link" aria-current>Devs</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/admin" className="nav-link active" aria-current>Admin</Link>
                    </li> */}
                    </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar;
