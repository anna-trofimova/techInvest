
import React, { Component } from 'react';

export default class Onas extends Component {
  render() {
    return (
      <>
     <div className='onas'>
      <h1>«ВЕГЛАС ИНЖИНИРИНГ»</h1>
      <p>ЗАО"Веглас Ижиниринг" - активно развивающаяся компания, которая постоянно расширяет спектр своих услуг. Компания выполняет проектные и изыскательные работы, производит расчёты, связанные с термостабилизацией грунтов. Постоянно растущие возможности компании позволяют всё большему числу потребителей получать качественные услуги в области инженерных работ. Проектно-изыскательная компания "Веглас Ижиниринг" за весь срок существования успела зарекомендовать себя, как надёжный партнёр для многих крупных российских и зарубежных компаний, таких как Роснефть, Газпром, Лукойл, Транснефть и другие.</p>
     </div>

     <div className='whatwedo'>
       <h3>Направления деятельности:</h3>
       <p> ◈ Комплексные инженерные изыскания </p>
       <p> ◈ Проектные работы </p>
       <p> ◈ Авторский надзор за строительством </p>
       <p> ◈ Инжиниринговые услуги </p>
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

