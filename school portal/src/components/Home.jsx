import React from 'react'
import Pexel from '../images/pexel.jpg'
import Ruler from '../images/ruler.png'
import Folder from '../images/folder.png'
import Book from '../images/book.png'
import Board from '../images/board.png'
import Copy from '../images/copy.png'
import Wallet from '../images/wallet.png'
import Staff from '../images/staff.png'
import Tag from '../images/tag.png'
import Apple from '../images/apple.png'
import Applee from '../images/applee.png'
import Box from '../images/box.png'
import Call from '../images/call.png'
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"

const Home = () => {

  let pexel = {
    marginLeft: '-20%'
  }

  return (
    <>
    <div>
        <section className='sectionOne'>
          <div>
            <h1 className='H1'>Welcome SchoolsPortal</h1>
            <p className='para'>A robust and feature rich cloud based school management aplication that allows <br /> school managers effectively manage their schools remotely from anywhere with <br/> tools for teachers to teach and students to learn online anywhere.</p>
            <div className='get'><a id='get2' href="">GET STARTED</a></div>
            </div>
            <div>
            <img className='pexel' style={pexel} src={Pexel} alt="" width={400} height={450}/>
            </div>
        </section>
    
    <div>
    <div className='text-center mt-5'> 
      <img src={Ruler} alt="" />
      <h3 id='h3' className='mt-3'>WHY CHOOSE SCHOOLSPORTAL?</h3>
      <p id='para2' className='mt-2'>You can’t manage what you can’t measure. SchoolPortalTM puts all your school's <br /> data within reach at all times, anywhere you are. Number of students per class,<br /> per term, per session. Number of staff, outstanding school fees, etc.</p>
    </div>
      <section className='container'>
    <div className='row'>
    <div className='card col-3 ms-5'>
  <img src={Folder} alt="" width={65} />
  <div className='card-body'>
    <h5 className='card-title'>Student Erolment</h5>
    <p id='par' className='card-text'>Schools can easily enroll returning student. <br /> We adopt a once and only policy. Once a piece of info has been recorded, it can be re-used, making your workflow a lot easier and smoother.</p>
  </div>
  </div>
  <div className='card col-3 ms-5'>
  <img src={Book} alt="" width={65} />
  <div className='card-body'>
    <h5 className='card-title'>Staff Management</h5>
    <p id='par'  className='card-text'>Now you can assign teachers to classes and monitor their work virtually. Create staff groups for teachers, drivers, cooks and assign duties easily with free SMS prompt.</p>
  </div>
  </div>
  <div className='card col-3 ms-5'>
  <img src={Board} alt="" width={50} />
  <div className='card-body'>
    <h5 className='card-title'>Classroom Management</h5>
    <p id='par'  className='card-text'>Class Attendance, Timetable Management, Continuous Assessment Management, Automatic computation of student scores. Delivery of scores via SMS, etc</p>
  </div>
  </div>
    </div>
    </section>

    <section className='containerTwo'>
    <div className='row'>
    <div className='card col-3 ms-5'>
  <img src={Copy} alt="" width={65} />
  <div className='card-body'>
    <h5 className='card-title'>Student Report/Grading System</h5>
    <p id='par' className='card-text'>Customized auto generated report system that collates results, generate reports, and also sends results by email and SMS..</p>
  </div>
  </div>
  <div className='card col-3 ms-5'>
  <img src={Wallet} alt="" width={65} />
  <div className='card-body'>
    <h5 className='card-title'>School Bill/Fees Management</h5>
    <p id='par'  className='card-text'>School Fees, PTA Levies and other bills managed effectively. Easily notify parents on their installments via sms and email..</p>
  </div>
  </div>
  <div className='card col-3 ms-5'>
  <img src={Staff} alt="" width={50} />
  <div className='card-body'>
    <h5 className='card-title'>Parents Forum</h5>
    <p id='par'  className='card-text'>Easy communication between the school and parents via email and free SMS with an online forum for parents discussions.</p>
  </div>
  </div>
    </div>
    </section>
    </div>
    </div>
    <section className='topp'>
      <div className='text-center mt-5'>
        <img src={Tag} alt="" />
        <h3>OUR FEATURES</h3>
        <p>Other features on SchoolsPortal includes School Bus management, Hostel <br /> management, classroom management, library management etc.</p>
      </div>
      <div className='container'>
    <div className='row'>
    <div className='card col-6'>
  <img src={Apple} alt="" width={500}/>
  <div className='card-body'>
  </div>
  </div>
  <div id='hTwo' className='card col-6'>
  <div id='cardd' className='card-body'>
    <h2 id='all' className='card-title'>All you need, in one place</h2>
    <p id='paro'  className='card-text'>Access all your data and information on your students, staff and parents in one place. SchoolsPortal is a feature rich web application for school management and online learning. Our features cover all the physical processes involved in running a school physically.</p>
    <button className='buton'>READ MORE</button>
  </div>
  </div>
  </div>
  </div>

  <div className='container'>
    <div className='row'>
    <div className='card col-6'>
  <div id='cardd' className='card-body'>
    <h2 id='all' className='card-title mt-5'>A feature rich software that puts you in charge</h2>
    <p id='paro'  className='card-text mt-4'>SchoolsPortal is loaded with numerous features that puts you in charge and allow you to manage your school from anywhere. Our features includes School fees payment online, CBT, E-learning, school accounting amongst, staff payroll system and many others.</p>
    <button className='buton'>READ MORE</button>
  </div>
  </div>
    <div id='app' className='card col-6'>
  <img src={Applee} alt="" width={500}/>
  <div className='card-body'>
  </div>
  </div>
  </div>
  </div>
    </section>
    <section className='container mt-5'>
     <div className='text-center mt-5'>
        <img src={Staff} alt="" />
        <h3>OUR SUPPORT CENTER</h3>
        <p>It is a long established fact that a reader will be of a page when established <br /> fact looking at its layout.</p>
      </div>
      <div className='row'>
        <div className='col-6'>
          <div>
            <h5 className='divH'>Classroom Management:</h5>
            <p className='parall'>Manage your classes effectively with increased access to class timetable, students reports, records and attendance for parents online.</p>
          </div>
          <div>
            <h5 className='divH'>School Bus Management:</h5>
            <p className='parall'> Now you can manage school buses and communicate with parents of students using your buses alone via SMS or Email when you need to.</p>
          </div>
          <div>
            <h5 className='divH'>Hostel Management:</h5>
            <p className='parall'>Hotels can now be managed remotely with easy communication with parents via free SMS and email</p>
          </div>
        </div>
        <div className='col-6'>
          <div className='diver'>
            <h5 className='divH'>Library Management:</h5>
            <p className='parall'>Get access to over 500GB of books online and you can create your virtual library for your school.</p>
          </div>
          <div className='diver'>
            <h5 className='divH'>School Calendar:</h5>
            <p className='parall'>it allows parents and students to plan and prepare for programs and events coming up in the school.</p>
          </div>
          <div className='diver'>
            <h5 className='divH'>Birthday Alerts:</h5>
            <p className='parall'>Our system will alert you when any of your students have a birthday so you can celebrate with them and send out birthday greetings</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className=' demo text-center'>
        <h3 className='HH'>You have other questions or need help</h3>
        <button className='buto'>CONTACT US</button>
      </div>
    </section>

    <section className='container'>
      <div className='row'>
      <div className=' box text-center'>
        <img src={Box} alt="" />
        <h3>OUR PRICING</h3>
      </div>
        <div className='col-3'>
        <div id='cadi1' className='card shadow'>
  <div class="card-body">
    <h1 id='oneFive' class="card-title text-center">₦1,500</h1>
    <p className='per text-center'>Per Child/Per Term</p>
   <div className='upp'>
    <p className='modul'>School Management Module ✔</p>
    <p className='modul'>Online Payment Module ✔</p>
    <p className='modul'>E-Learning Module ✖</p>
    <p className='modul'>CBT Module ✖</p>
    <p className='modul'>No Hidden Fees</p>
    <a id='noww' href="#" class="btn btn">ORDER NOW</a>
    </div>
        </div>
        </div>
        </div>
        <div className='col-3'>
        <div id='cadi2' className='card shadow'>
  <div class="card-body">
    <h1 id='oneFive' class="card-title text-center">₦2,000</h1>
    <p className='per text-center'>Per Child/Per Term</p>
   <div className='upp'>
    <p className='modul'>School Management Module ✔</p>
    <p className='modul'>Online Payment Module ✔</p>
    <p className='modul'>E-Learning Module ✖</p>
    <p className='modul'>CBT Module ✖</p>
    <p className='modul'>No Hidden Fees</p>
    <a id='noww' href="#" class="btn btn">ORDER NOW</a>
    </div>
        </div>
        </div>
        </div>
        <div className='col-3'>
        <div id='cadi3' className='card shadow'>
  <div class="card-body">
    <h1 id='oneFive' class="card-title text-center">₦3,500</h1>
    <p className='per text-center'>Per Child/Per Term</p>
   <div className='upp'>
    <p className='modul'>School Management Module ✔</p>
    <p className='modul'>Online Payment Module ✔</p>
    <p className='modul'>E-Learning Module ✖</p>
    <p className='modul'>CBT Module ✖</p>
    <p className='modul'>No Hidden Fees</p>
    <a id='noww' href="#" className='btn btn'>ORDER NOW</a>
    </div>
        </div>
        </div>
        </div>
        </div>
    </section>

    <section className='container'>
      <div className='text-center'>
        <img src={Call} alt="" />
        <h3 className='in'>GET IN TOUCH</h3>
      </div>
      <div className='row'>
        <div className='col-6'>
          <p>
            <span className='care'>Customer care:</span>
            <p><span className='number'>+234 904-143-1303</span></p>
          </p>
          <p>
            <span className='care'>Office Address: </span>
              <p><span className='number'>Suite 318B, DBM Plaza, Nouakchott Street Wuse <br /> Zone 1, Abuja.</span></p>
          </p>
          <p>
            <span className='care'>Email Address:</span>
            <p><span className='number'>info@schoolsportal.com.ng</span></p>
          </p>
          <p>
            <span className='care'>Office Time:</span>
            <p><span className='number'>9:00AM To 6:00PM</span></p>
          </p>
        </div>
        <div className='col-6'>
          <div className='news'>
            <div className='inputA'>
            <input className='inptB rounded' type="text"  placeholder='Your Name*' />
            <input className='inptC rounded'  type="text" placeholder='Your email*'  />
            </div>
            <div className='inputD'>
            <input className='inptE rounded'  type="text" placeholder='Your Subject*' />
            <input className='inptF rounded'  type="text" placeholder='Your Phone Number*' />
            <div className='mt-4'>
              <textarea name='' placeholder='Your message....' id='text1' cols='50' rows='7'></textarea>
            </div>
            <div className='send mt-3'><input id='inputt' type="text"  placeholder='SEND MESSAGE ' /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className=' set mt-5'>
      <div>
        <ul className=' last text-center'>
          <img className='src'  src={Facebook} alt="" />
          <img className='src'  src={Twitter} alt="" />
          <div className='ter'>
          <ul className='finish'>Terms & Conditions |</ul> 
          <ul className='finish'>Privacy Policy |</ul>
          <ul className='finish'>Contact Us</ul>
          </div>
          <ul className='parti'>2023 © SchoolsPortal. Design by <a className='yaks' href="">PapiloYaks</a></ul>
        </ul>
      </div>
    </section>
    </>
  )
}

export default Home