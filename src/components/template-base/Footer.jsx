import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
      <footer className="main-footer">
  <div className="footer-left">
    Copyright © 2021 <div className="bullet" /> Edit By <Link to={'#'}>ReacTeam UDEA MinTic</Link>
  </div>
  <div className="footer-right">
    1.0.0
  </div>
</footer>

    )
}

export default Footer
