import React from 'react'

export default function Contacts() {
  return (
    <div className='contacts'>
      <h1>Контакты</h1>
      <article>
        <h4>Адрес:</h4>
        <address>
          <p>г. Москва </p>
          <p>Большой Толмачевский пер., дом 5, стр. 5</p>
        </address>
      </article>
      <article>
        <h4>Телефон:</h4>
        <p>+7(495) 585-07-59</p>
        <p>info@veglas-e.ru</p>
      </article>
    </div>
  )
}
