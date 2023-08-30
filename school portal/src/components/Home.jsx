import React from 'react'
import Pexel from '../images/pexel.jpg'
import Ruler from '../images/ruler.png'
import Folder from '../images/folder.png'
import Book from '../images/book.png'
import Board from '../images/board.png'

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
    <div className='card col-3'>
  <img src={Folder} alt="" width={65} />
  <div className='card-body'>
    <h5 className='card-title'>Student Erolment</h5>
    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className='btn btn-primary'>Go somewhere</a>
  </div>
  </div>
  <div className='card col-3'>
  <img src={Book} alt="" width={65} />
  <div className='card-body'>
    <h5 className='card-title'>Card title</h5>
    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className='btn btn-primary'>Go somewhere</a>
  </div>
  </div>
  <div className='card col-3'>
  <img src={Board} alt="" width={60} />
  <div className='card-body'>
    <h5 className='card-title'>Card title</h5>
    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className='btn btn-primary'>Go somewhere</a>
  </div>
  </div>
    </div>
    </section>
    </div>
    </div>
    </>
  )
}

export default Home