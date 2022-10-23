import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";


const Loader = () => {
  return (
    <div className='loader'>
        <div className='loaderWrapper'>
        <PacmanLoader
        size={90}
        color={'#fd9e21'}
        />
        </div>
    </div>
  )
}

export default Loader