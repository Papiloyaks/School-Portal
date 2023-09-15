import React, {useEffect, useState} from 'react'

const Efects = () => {
  useEffect(() => {
    console.log("Changing")
  }, [])

  const [first, setfirst] = useState  (0)
  const change = () => {
    setfirst(first+1)
  }
  return (
    <>
    <div>{first}</div>
    <button onClick={change}>change</button>
    </>
  )
}

export default Efects