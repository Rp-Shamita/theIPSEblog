import React from "react"
import { Link } from "react-router-dom"
const NotFound = () => {
    return(
        <div className="Not-Found">
            <h2>Sorry</h2>
            <p>Page not found. Click on the below link to go to the homepage</p>
            <Link to='/'>To the homepage...</Link>
        </div>
    )
}

export default NotFound;