
import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

export default class Onas extends Component {
  render() {
    return (
      <>
     <div className='prolog'>
        <h1>О нас</h1>
        <h4>Основной вид деятельности - промышленное и гражданское проектирование</h4>
     </div>

     <div className='whatwedo'>
       <h3>Направления деятельности:</h3>
       <p>Комплексные инженерные изыскания</p>
       <p>Проектные работы</p>
       <p>Авторский надзор за строительством</p>
       <p>Инжиниринговые услуги</p>
     </div>

     <div className='legal'> 
       <h3>Сертификация, допуски, лицензии</h3>
       <article className='licenses'>
        <img src={require ('../images/license1.jpg')} alt='license1' width='350px'/>
        <img src={require ('../images/license2.jpg')} alt='license2' width='350px'/>
        <img src={require ('../images/license3.jpg')} alt='license3' width='350px'/>
        <img src={require ('../images/license4.jpg')} alt='license4' width='350px'/>
        <img src={require ('../images/license5.jpg')} alt='license5' width='350px'/>
        <img src={require ('../images/license6.jpg')} alt='license6' width='350px'/>
       </article>
     </div>

        
      </>
    )
  }
}
