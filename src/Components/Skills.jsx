import svelte from '../Images/sve.png'
import html from '../Images/htmll.png'
import css from '../Images/cssl.png'
import dgraph from '../Images/dgraphdb.png'
import react from '../Images/reactjs.png'
import tailwind from '../Images/tail.png'
import go from '../Images/gol.jpg'
import MongoDB from '../Images/mongo.png'
import node from '../Images/nodejs.png'
import { useEffect } from 'react'

function Skills() {
   

    return(
        <>
  
    <h1 class="mt-12 mb-4  flex justify-center text-3xl font-bold">Skills</h1>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
            <img src={go} alt="" className='h-12 relative top-12'/>
        </div>
        <div class="slide ">
            <img src={html} alt="" className='h-10 relative bottom-1' />
        </div>
        <div class="slide ">
            <img src={css} alt="" className='h-12 relative bottom-1'  />
        </div>
        <div class="slide ">
            <img src={svelte} alt=""  className='h-12 relative bottom-1' />
        </div>
        <div class="slide">
            <img src={tailwind} alt="" className='h-18 relative bottom-1'/>
        </div>
        <div class="slide">
            <img src={MongoDB} alt="" className='h-12 relative bottom-1' />
        </div>
        <div class="slide ">
            <img src={dgraph} alt="" className='h-22 relative bottom-1' />
        </div>
        <div class="slide">
            <img src={react} alt="" className='h-20 relative bottom-1'/>
        </div>
        <div class="slide  ">
            <img src={node} alt="" className='h-20 relative bottom-3' />
        </div>
        
       
        <img src={go} alt="" className='h-12 relative top-12'/>
        <div class="slide ">
        <img src={html} alt="" className='h-10 relative bottom-1' />
        </div>
        <div class="slide ">
            <img src={css} alt="" className='h-12 relative bottom-1'  />
        </div>
        <div class="slide ">
            <img src={svelte} alt=""  className='h-12 relative bottom-1' />
        </div>
        <div class="slide">
            <img src={tailwind} alt="" className='h-18 relative bottom-1' />
        </div>
        <div class="slide">
            <img src={MongoDB} alt="" className='h-12 relative bottom-1' />
        </div>
        <div class="slide ">
            <img src={dgraph} alt="" className='h-22 relative bottom-1' />
        </div>
        <div class="slide">
            <img src={react} alt="" className='h-20 relative bottom-1' />
        </div>
        <div class="slide  ">
            <img src={node} alt="" className='h-20 relative bottom-1' />
        </div>
        
      </div>
    </div>
        </>
    )
}
export default Skills