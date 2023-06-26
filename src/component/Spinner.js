import React from 'react'

const Spinner = () => {

    return (
      <div className='my-3 text-center'>
        <div className="spinner-grow text-primary mx-2" role="status">
            <span className="sr-only">Loading....</span>
        </div>
        <div className="spinner-grow text-danger mx-2" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning mx-2" role="status">
            <span className="sr-only">Loading...</span>
        </div>    
        <div className="spinner-grow text-dark mx-2" role="status">
            <span className="sr-only">Loading...</span>
        </div>                  
      </div>
    )

}

export default Spinner
