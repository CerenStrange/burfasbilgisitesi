import React from 'react'
import { NavLink } from 'react-router-dom'
import burfas from '../assets/burfas.png'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={burfas} width="100px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collaps navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className="nav-link" to="/" >ANASAYFA</NavLink>
              <NavLink className="nav-link" to="/subeler" >ŞUBELER</NavLink>
              <NavLink className="nav-link" to="/menuler" >MENÜLER</NavLink>
            </ul>
            <span className="navbar-text">
              Sosyal hayatın tadı, BURFAŞ'la çıkar.
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
