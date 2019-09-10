import React from "react"
import "./index.scss"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const FullPageLoader = () => {
  return (
      <div  className="fullpage-loader">
        <Loader
        type="Watch"
        color="#29AD44"
        height={100}
        width={100}
        // timeout={8000} //8 secs
     />
      </div>
  )
}

export default FullPageLoader