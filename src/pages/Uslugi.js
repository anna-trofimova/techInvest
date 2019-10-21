import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
import Project1 from '../componets/Project1'
import Project2 from '../componets/Project2'
import Project3 from '../componets/Project3'

export default class Uslugi extends Component {

  render() {
    return (
      <div className='uslugi'> 
        <h1>Услуги</h1>
        <div className='projectsList'>
          <Collapsible trigger='Проектные работы'> <Project1/> </Collapsible> 
          <Collapsible trigger='Комплексные инженерные изыскания'> <Project2/> </Collapsible>
          <Collapsible trigger='Инжиниринговые услуги'> <Project3/> </Collapsible>
        </div>
      </div>
    )
  }
}
