import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="menu">
    <li>
      <IndexLink to='/' activeClassName='route--active'>
        Home
      </IndexLink>
    </li>
    <li>
      <Link to='/newreservation' activeClassName='route--active'>
        New Reservation
      </Link>
    </li>
    <li>
      <Link to='/paidreservation' activeClassName='route--active'>
        Paid Reservation
      </Link>
    </li>
    <li>
      <Link to='/reservationdetail' activeClassName='route--active'>
        Reservation Detail
      </Link>
    </li>
  </div>
  )

export default Header
