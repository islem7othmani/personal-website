import svelte from '../Images/svelte.png'
import html from '../Images/html.jpg'
import css from '../Images/css.jpg'
import dgraph from '../Images/dgraph.png'
import react from '../Images/react.png'
import tailwind from '../Images/tailwind.png'
import go from '../Images/go.png'
import js from '../Images/js.png'
import node from '../Images/node.png'

function Skills() {
    return(
        <>
        <div className=" text-white pb-12 pt-16" id="skills">
            <div className='flex justify-center '>
<div className=''>
<span className='font-bold text-2xl'>My Skills</span> 
<p>In this section, you will find a comprehensive list of my professional skills and areas of expertise. With a solid foundation in Web Development</p>
</div>
</div>
<div className='flex justify-center'>
<div className="grid grid-cols-3 space-y-2 space-x-4 ">

<div class="block p-2 bg-white border border-gray-200 rounded-lg shadow flex space-x-6 w-56 flex relative top-2 left-4 h-14">
<img src={react} alt="" className='rounded-full h-10 shadow-xl '/>
    <h5 class="mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white  ">React JS</h5>
    
</div>


<a href="#" class="block p-2 bg-white border border-gray-200 rounded-lg shadow flex space-x-6 w-56  ">
<img src={svelte} alt="" className='rounded-full h-10 shadow-xl'/>
    <h5 class="mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white ">Svelte JS</h5>
    
</a>


<a href="#" class="block p-2 bg-white border border-gray-200 rounded-lg shadow  w-56 flex space-x-6 ">
<img src={tailwind} alt="" className='rounded-full h-10 shadow-xl' />
    <h5 class="mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">Tailwind CSS</h5>
 
</a>


<a href="#" class="block p-2 bg-white border border-gray-200 rounded-lg shadow w-56 flex  space-x-6">
    <div className='flex'>
    <img src={html} alt="" className='rounded-full h-10 shadow-xl' />
    </div>

    <h5 class=" mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">HTML</h5>
  
</a>
<a href="#" class="block p-2 bg-white border border-gray-200 rounded-lg shadow w-56 flex  space-x-6">
    <div className='flex'>
    <img src={css} alt=""  className='rounded-full h-10 shadow-xl'  />
    </div>

    <h5 class=" mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">CSS</h5>
  
</a>


<a href="#" class="block p-2 bg-white border border-gray-200 rounded-lg shadow w-56 flex space-x-6">
<img src={js} alt="" className='rounded-full h-10 w-12 shadow-xl'/>
    <h5 class="mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">JavaScript</h5>
  
</a>

<a href="#" class="block p-2 bg-white border border-gray-200 rounded-lg shadow w-56 flex space-x-6">
<img src={go} alt="" className='rounded-full h-10 shadow-xl'/>
    <h5 class="mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">Golang</h5>
  
</a>
<a href="#" class="block p-2 bg-white border border-gray-200 rounded-lg shadow w-56 flex space-x-6">
<img src={node} alt="" className='rounded-full h-10 shadow-xl' />
    <h5 class="mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">Node JS</h5>
  
</a>
<a href="#" class="block p-2 bg-white border border-gray-200 rounded-lg shadow w-56 flex space-x-6">
<img src={dgraph} alt="" className='rounded-full h-10 shadow-xl' />
    <h5 class="mb-2 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">Dgraph</h5>
  
</a>
</div>
</div>
        </div>


        </>
    )
}
export default Skills