import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import nave from './icon-new'
import ufo from './icon-paid'
import satelite from './icon-detail'
import FontIcon from 'react-toolbox/lib/font_icon'

export const Header = () => (
  <div className="menu">
    <li>
      <Link to='/newreservation' activeClassName='route--active'>
        {nave('#a2a2a2')}
        <p>New Reservation</p>
      </Link>
    </li>
    <li>
      <Link to='/paidreservation' activeClassName='route--active'>
        {ufo('#a2a2a2')}
        <p>Paid Reservation</p>
      </Link>
    </li>
    <li>
      <Link to='/reservationdetail' activeClassName='route--active'>
        {satelite('#a2a2a2')}
        <p>Reservation Detail</p>
      </Link>
    </li>
  </div>
  )

export default Header
