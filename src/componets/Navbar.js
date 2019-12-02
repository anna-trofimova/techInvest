import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li><Link to='/'>О нас</Link></li>
          <li><Link to='/projects'>Наши проекты</Link></li>
          <li><Link to='/uslugi'>Услуги</Link></li>
          <li><Link to='contacts'>Контакты</Link></li>
        </ul>
      </div>
    )
  }
}
