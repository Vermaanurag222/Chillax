import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Components/Footer'
import { Clock, Command, Headphones, Heart, Moon, Sun } from 'react-feather'
import Logo from './Image/favicon.png'

const App = () => {
  const [theme, Settheme] = useState('light-theme')
  const themechanger = () => {
    theme === 'dark-theme' ? Settheme('light-theme') : Settheme('dark-theme');
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-2 px-sm-2 px-0 border-right min-vh-100">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
              <a className="navbar-brand" href="/">
                <b>M</b>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="/" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle d-flex">
                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-flex d-none d-sm-inline"></span><Headphones size={20} />
                  </a>
                  <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0 d-flex align-items-center"> <span className="d-none d-sm-inline">Browse</span><Command size={20} /></a>
                    </li>
                    <li>
                      <a href="#" className="nav-link d-flex align-items-center px-0"> <span className="d-none d-sm-inline">My Favorite</span> <Heart size={20} /> </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 d-flex align-items-center align-middle">
                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">History </span> <Clock size={18} /></a>
                </li>
                {/* <li>
                  <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                  <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">History</span> <Clock size={18} /></a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span>0 </a>
                  <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col py-3">
            {/* -------------------- Top Nav ---------------------------- */}
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control bg-transparent text-white mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item p-2" onClick={themechanger}>
                    {theme === 'dark-theme' ? <Sun onClick={() => Settheme('light-theme')} size={18} /> : <Moon onClick={() => Settheme('dark-theme')} size={18} />}
                  </li>
                </ul>
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">loser</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" >New project...</a></li>
                    <li><a className="dropdown-item" >Settings</a></li>
                    <li><a className="dropdown-item" >Profile</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* ----------Routes---------- */}

            <div className='scro'>
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/About' element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  )
}

export default App
