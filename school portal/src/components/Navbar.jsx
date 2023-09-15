import React from 'react'
import Logo from "../images/logo.png"
import Capture from "../images/capture.png"
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import {VscAccount} from 'react-icons/vsc'

const Navbar = () => {
  let navbar = {
    marginLeft: '10%',
  }

  let home = {
    color: 'white',
    margin: '13px'
  }

  let img = {
    height: '25px',
    marginTop: '3%',
    marginLeft: '100px'

  }
  let no = {
    color: 'white',
    marginTop: '3%',
    fontSize: '15px',
    
  }



    return (
    <>
    <nav id='navs' className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand ms-5" href="#"><img src={Logo} alt="" srcset="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div style={navbar} className="navbar-nav">
        <a  style={home} className="ho nav-link active" aria-current="page" href="#">Home</a>
        <a  style={home} className="ho nav-link" href="#">Services</a>
        <a  style={home} className="ho nav-link" href="#">Features</a>
        <a  style={home} className="ho nav-link" href='' >FAQ</a>
        <a  style={home} className="ho nav-link" href='' >pricing</a>
        <a  style={home} className="ho nav-link" href='' >Contact</a>
        <a className="ho nav-link mt-2 " href='/signup' ><span id='vsc'><VscAccount/></span> Signup</a>
        <img style={img} src={Capture} alt="" srcset=""  /> <span style={no}>+234 08161126257</span>
        <img src={Facebook} alt="" srcset="" height={45} />
        <img src={Twitter} alt="" srcset="" height={45} />
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar