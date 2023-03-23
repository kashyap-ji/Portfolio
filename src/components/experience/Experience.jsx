import React from 'react'
import './Experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Something</h3>
          <div className="experience__content">
            
            <artical className='experience__details'>
              <HiBadgeCheck/>
              <div>
               <h4>something1</h4>
               <small className='text-light'>Experienced</small>
              </div>
              
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>something2</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>something3</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>something4</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </artical>

          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Experience