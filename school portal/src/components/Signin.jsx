import React from 'react'


const Signin = () => {
  return (
    <>
    <h1>Sign In</h1>
    <div className=''>
    <div className='shadow child p-5'>
      <div className='flex-col'>
        <div><input type="text" placeholder='Email' /></div>
        <div><input type="text" placeholder='Password' /></div>
        <a href=""><button>Submit</button></a>

    </div>
    </div>
    </div>
    </>
  )
}

export default Signin